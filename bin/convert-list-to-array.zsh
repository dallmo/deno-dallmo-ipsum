#!/bin/zsh

# word files are stored in var/[word-list] text files, with 1 word on a single line
# the word files are to be updated directly
# then run this script to convert to ts files for the app to import it 

target_file="$1"
temp_file="$( curl -sS https://jimz.cc/app/file/temp | zsh )"
array_file="$target_file"'.ts'

# this do :
# - remove blank lines
# - remove blank space and tab
# - remove lines with only 1 char
# - translate all char to lowercase
# - sort it, and make each line unique
grep -v ^$ "$target_file" | sed 's/^[\t ]*//' | sed '/^.$/d' |  tr '[:upper:]' '[:lower:]' | sort | uniq > "$temp_file"

# 1st and last line of the array file
array_file_line_first="const word_array: string[] = ["
array_file_line_last_1="]; // word_array"
array_file_line_last_2="export { word_array };"

# clean the file and add the very first line
echo "$array_file_line_first" > "$array_file"

# add double-quotes and comma to each line / word
cat "$temp_file" | sed "s/^/\"/g" | sed "s/$/\",/g" >> "$array_file" 

# append the last 2 lines
echo "$array_file_line_last_1" >> "$array_file"
echo "$array_file_line_last_2" >> "$array_file"

# run deno check to make sure the syntax is ok
deno check "$array_file"
