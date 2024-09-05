#!/bin/zsh

num_of_words="$1"

echo "-----------------------------------------"
echo "approach 1 : with bash "
time deno run -A test-1.ts --num="$num_of_words"

echo "-----------------------------------------"
echo "approach 2 : pure deno "
time deno run -A test-2.ts --num="$num_of_words"
