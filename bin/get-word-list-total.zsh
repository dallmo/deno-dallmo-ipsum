#!/bin/zsh

target_file="../etc/latin-word.list"

wc "$target_file" | awk '{print $1}'

