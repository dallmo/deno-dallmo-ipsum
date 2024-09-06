# @dallmo/ipsum


# overview
- generating fake texts.  current version only covers latin words, asian words to be included in future versions ; 
- published on [jsr][link-2] ; 


# list of methods
- gen_array : generate an array of words
- gen_paragraph : generate a paragraph with simple punctuations


# usage
## running on deno, import via jsr

1. in CLI, add the module with :
```
deno add @dallmo/util-ipsum
```

2. create `test-via-jsr.ts` ; 

```
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
```

3. run the test file
```
deno run test-via-jsr.ts
```

# test
```
test scripts to be updated.
```

[comments]: ----------------------------------
[link-1]: https://deno.land/x/dallmo_ipsum
[link-2]: https://jsr.io/@dallmo/ipsum
