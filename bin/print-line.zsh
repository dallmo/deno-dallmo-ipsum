#!/bin/zsh

line_number="$1"  # Replace with the line number you want
file="../etc/latin-word.list"  # Replace with your file path

# Use sed to print the specific line
sed "${line_number}q;d" "$file"


