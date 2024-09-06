///////////////////////////////////////////////
// import libraries via "etc/deps.ts"
import {
  
  //dallmo_util_array,
  dallmo_util_math,  

} from "../etc/deps.ts";
///////////////////////////////////////////////
// import interfaces via "etc/interfaces.ts"
/*
import {
} from "./etc/interfaces.ts";
*/
///////////////////////////////////////////////
// the main app goes here
async function rand_word_array( num: number ): Promise<string[]> {

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
  
    const words_to_gen: number = num ; 
  
    const word_list_file: string = "./etc/latin-word.list";
    const content_string: string = await Deno.readTextFile( word_list_file );
    const word_list_array: string[] = content_string.split("\n");
  
    // the total number of words to choose from
    const word_list_total: number = word_list_array.length;
  
    // the array of random index to pick from word_list_total
    const rand_integer_array: number[] = dallmo_util_math.random_integer_array( words_to_gen, 1, word_list_total );
          
    // pick the item from word_list_array per rand_integer_array
    // no repeat assumed
    const rand_word_array: string[] = [];
          for( const i of rand_integer_array ){
            rand_word_array.push( word_list_array[i] );
          }; // for
  
    return rand_word_array;
  
}; // function
///////////////////////////////////////////////
export {

  rand_word_array,

}; // export