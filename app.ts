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
import {
  word_array as word_list_array_la // word list array of latin words
} from "./var/word-la.list.ts";
///////////////////////////////////////////////
/**
 * give a number N, generate an array with N random words.
 * 
 * @function gen_array
 * @param {number} num - the number of words in the output array
 * @returns {Promise<string[]>}
 */
function gen_array( num: number ): string[] {

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
   */
  
    const words_to_gen: number = num ; 
  
    const word_list_array: string[] = word_list_array_la;
  
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
 * @function gen_paragraph
 * @param {number} num - the number of words to be generated for the output paragraph 
 * @returns {Promise<string>}
 */
async function gen_paragraph( num: number ): Promise<string> {
  
  const rand_word_array: string[] = gen_array( num );
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

  // ---------------------------------------------------
  // define some vars here
  // this is the range of sentence lengths
  const option_obj: Random_Section_Option_Obj = {
    min: 3,
    max: 8,
  }; // option_obj
  
  // the array of symbols to pick randomly between each section / sentence
  // 2 commas here to make it appear in higher chance
  const random_symbol_array: string[] = [".",",",",","?","!",";"," -"];
  // ---------------------------------------------------

  //
  const word_array_length: number = word_array.length;
  
  let output_paragraph: string = "";
  let curr_break_index: number = 0;
  const rand_sections: number[] = dallmo_util_math.random_sections( word_array_length, option_obj );
        //console.log( rand_sections );

        for( let i=0; i<rand_sections.length; i++){

          // increment the break index, so that
          // it will shift to the next section in the next loop
          curr_break_index += rand_sections[i];

          let curr_symbol: string;
          // check if this is the last item
          if( i == rand_sections.length-1 ){
            // it must be full-stop
            curr_symbol = ".";
          }else{
            // pick it randomly between an array of symbols
            curr_symbol = dallmo_util_array.random_item(random_symbol_array);
          }; // if else, check last item

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

  gen_array,
  gen_paragraph,

}; // export
