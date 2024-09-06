import { 
  main as dallmo_ipsum
} from "./mod.ts";

// the num of words to gen
const num: number = 20;

const result: string[] = await dallmo_ipsum( num );
      console.log( result );

