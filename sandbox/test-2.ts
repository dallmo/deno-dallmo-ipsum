/**
 * approach 2
 *  - everything in deno
 * 
 *  - input : asks for a total number of random words X
 * 
 *  - deno : preload the whole list as an array
 *  - deno : get the size of this array as N ; 
 *  - deno : pick X num of intergers between 1..N, assume no repeat ; 
 *  - deno : pick specific item from the word list array ; 
 *  - deno : shuffle these items, keep them as array, return the array ; 
 */


import {
  parse_args,
  dallmo_util_array,
} from "../etc/deps.ts";

const flags = parse_args( Deno.args );
const num_of_words_to_gen: number = flags.num;


const word_list_file: string = "../etc/latin-word.list";
const content_string: string = await Deno.readTextFile( word_list_file );
const word_list_array: string[] = content_string.split("\n");

console.log( "word_list_array: ", word_list_array );
