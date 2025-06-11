# @dallmo/ipsum


# overview
- generating fake texts.  current version only covers latin words, asian words to be included in future versions ; 
- published on [jsr][link-2] ; 


# list of methods
- gen_array : generate an array of words
- gen_paragraph : generate a paragraph with simple punctuations


# usage

1. create `test-via-jsr.ts` with these contents :  

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

2. run the test file
```
deno run test-via-jsr.ts
```


# test

( for reference only, test codes are mostly work in progress )

to run test codes : 

1. switch to the project root folder, i.e. `[root]/` ;
2. run deno task scripts :
- to test the local files : 
  - run `deno task test` ;
- to test with dependencies via jsr : 
  - run `deno task test-jsr` ; 


## notes on "import / deno add"
in the sample code above, the module is imported via :
```
import { [method name] } from "jsr:@[module name]";
```

in case the import is done with this instead : 
```
import { [method name] } from "@[module name]";
```

i.e. without the "jsr:" prefix, then the module has to be added with this command in CLI :
```
deno add jsr:@[module name]
```

if the module has been manually added in the CLI, import with the "jsr:" prefix inside the app is also ok.

updates have therefore been made to add the "jsr:" prefix to both the sample codes above and the test file `test-via-jsr.ts` for simple copy-n-paste.


[comments]: ----------------------------------
[link-1]: https://deno.land/x/dallmo_ipsum
[link-2]: https://jsr.io/@dallmo/ipsum


# updates
## 2025-06-11
- remove custom steps in github workflow which make changes to etc/deps.ts ;
- archived deno.land related files and focus only on jsr ; 
- add notes above on the usage of "jsr:" prefix ; 
