///////////////////////////////////////////////
// import libraries via "etc/deps.ts"
import {
  
  dallmo_util_array,
  dallmo_util_math,  

} from "./etc/deps.ts";
///////////////////////////////////////////////
// import interfaces via "etc/interfaces.ts"
/*
import {
} from "./etc/interfaces.ts";
*/


///////////////////////////////////////////////
// the main app goes here
async function main( num: number ): Promise<string[]> {

/**
 * approach 2
 *  - everything in deno
 *
 *  - input : given a total number of random words X
 *
 *  - deno : preload the whole list as an array
 *  - deno : get the size of this array as N ;
 *  - deno : pick X num of intergers between 1..N, assume no repeat ;
 *  - deno : pick specific item from the word list array ;
 *  - deno : shuffle these items, keep them as array, return the array ;
 */

  const word_list_file: string = "./etc/latin-word.list";
  const content_string: string = await Deno.readTextFile( word_list_file );
  const word_list_array: string[] = content_string.split("\n");

  const total_num_of_words: number = word_list_array.length;
  //      console.log( total_num_of_words );


  return ["a"];

}; // function
///////////////////////////////////////////////
export {

  main 

}; // export

