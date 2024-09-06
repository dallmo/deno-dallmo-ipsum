import { 

  gen_rand_word_array,
  gen_rand_word_paragraph,

} from "./mod.ts";

// the num of words to gen
const num: number = 50;

const result: string[] = await gen_rand_word_array( num );
      console.log( result );

const result2: string = await gen_rand_word_paragraph( num );
      console.log( result2 );
