
/*
 * keep all imports / dependencies here for centralized management
 * all other imports in this module should only point to here
 */

////////////////////////////////////////////////////////////////////////////////
// remote libraries
// -------------------
// deno standard library
export { 
  assert 
} from "jsr:@std/assert@^1.0.13";

// supporting util from dallmo
//export { dallmo_util_yaml } from "https://deno.land/x/dallmo_util_yaml/mod.ts";
export * as dallmo_util_array from "jsr:@dallmo/util-array@^1.4.1";
export * as dallmo_util_math  from "jsr:@dallmo/util-math@^1.3.1";
