///////////////////////////////////////////////
// import libraries via "etc/deps.ts"
import {
  
  dallmo_util_math,  
  dallmo_util_array,

} from "./etc/deps.ts";
///////////////////////////////////////////////
// import interfaces via "etc/interfaces.ts"
import {

  Random_Section_Option_Obj,

} from "./etc/interfaces.ts";
///////////////////////////////////////////////
/**
 * give a number N, generate an array with N random words.
 * 
 * @function gen_rand_word_array
 * @param {number} num - the number of words in the output array
 * @returns {Promise<string[]>}
 */
async function gen_rand_word_array( num: number ): Promise<string[]> {

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
/**
 * give a number N to generated a paragraph with N words.
 * 
 * @function gen_rand_word_paragraph
 * @param {number} num - the number of words to be generated for the output paragraph 
 * @returns {Promise<string>}
 */
async function gen_rand_word_paragraph( num: number ): Promise<string> {
  
  const rand_word_array: string[] = await gen_rand_word_array( num );
  const rand_word_paragraph: string = word_array_to_paragraph( rand_word_array );

  return rand_word_paragraph;

}; // function
///////////////////////////////////////////////
/**
 * insert "." and "," to random positions in the word array
 * 
 * @function word_array_to_paragraph
 * @param {string[]} word_array - the random word array ; 
 * @returns {string} paragraph - merged array as a single string, with "." and "," inserted ; 
 */
function word_array_to_paragraph( word_array: string[] ): string {

  const word_array_length: number = word_array.length;
  
  // this is the range of sentence lengths
  const option_obj: Random_Section_Option_Obj = {
    min: 5,
    max: 10,
  }; // option_obj

  let output_paragraph: string = "";
 
  let curr_break_index: number = 0;
  const rand_sections: number[] = dallmo_util_math.random_sections( word_array_length, option_obj );
        //console.log( rand_sections );

        for( const sentence_break_index of rand_sections ){
          curr_break_index += sentence_break_index;

          const curr_symbol: string = "."
          word_array[ curr_break_index-1 ] += curr_symbol; 

          //console.log("current word_array : ", word_array );
        }; // for

  //console.log( rand_sections );
  //console.log( word_array );

  // add the final full-stop
  output_paragraph = word_array.join(" ");
  //output_paragraph.concat(".");

  return output_paragraph;

}; // function
///////////////////////////////////////////////
export {

  gen_rand_word_array,
  gen_rand_word_paragraph,

}; // export
