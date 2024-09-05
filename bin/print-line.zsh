#!/bin/zsh

line_number="$1"  # the line to print
target_file="../etc/latin-word.list"  # the word fileh

# print the specific line
sed "${line_number}q;d" "$target_file"


