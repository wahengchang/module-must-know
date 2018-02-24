

Node uses two core modules for managing module dependencies:

The require module, which appears to be available on the global scope — no need to require('require').
The module module, which also appears to be available on the global scope — no need to require('module').



## When requiring a module
Node goes through the following sequence of steps:

Resolving: To find the absolute path of the file.
Loading: To determine the type of the file content.
Wrapping: To give the file its private scope. This is what makes both the require and module objects local to every file we require.
Evaluating: This is what the VM eventually does with the loaded code.
Caching: So that when we require this file again, we don’t go over all the steps another time.

## Module Wrapper function
Wrapper function is what keeps the top-level variables that are defined in any module scoped to that module.

It has 5 arguments: exports, require, module, __filename, and __dirname. This is what makes them appear to look global when in fact they are specific to each module.

## The require object
It’s an object that acts mainly as a function that takes a module name or path and returns the module.exports object. 

## Reference
 - [https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8](https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8)
 - [http://fredkschott.com/post/2014/06/require-and-the-module-system/](http://fredkschott.com/post/2014/06/require-and-the-module-system/)