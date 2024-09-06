import { 

  gen_array,
  gen_paragraph,

} from "jsr:@dallmo/ipsum";

// the num of words to gen
const num: number = 100;

// test the module
const result: string[] = await gen_array( num );
      console.log("gen_array:");
      console.log( result );
      
const result2: string = await gen_paragraph( num );
      console.log("gen_paragraph:");
      console.log( result2 );
