/**
 * approach 1
 *  - avoid loading the whole test file by using shell command to work on word list file
 * 
 *  - input : asks for a total number of random words X
 * 
 *  - bash : get total num of lines of latin-word.list as N ; 
 *  - deno : pick X num of intergers between 1..N, assume no repeat ; 
 *  - bash : grep a set of specific lines by these integers from word list file ; 
 *  - deno : shuffle these items, keep them as array, return the array ; 
 */

/////////////////////////////////////////
import {
  parse_args,
} from "../etc/deps.ts";

const flags = parse_args( Deno.args );
const num_of_words: number = flags.num;

console.log("num_of_words: ", num_of_words );

const cmd = new Deno.Command(
  "../bin/get-word-list-total.zsh", {
  args: [],
  });

// Collecting the output
const { stdout, stderr } = await cmd.output();

// Convert the Uint8Array to string
const output = new TextDecoder().decode(stdout);
const error = new TextDecoder().decode(stderr);

console.log("Output:", output);
console.log("Error:", error);
