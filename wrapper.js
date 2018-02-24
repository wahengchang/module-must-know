//This wrapper function has 5 arguments: 
// exports,
// require,
// module,
// __filename,
// and __dirname. 
console.log(arguments)

// Wrapper Function is roughly equivalent to:
// function (require, module, __filename, __dirname) {
//     let exports = module.exports;
//     // Your Code...
//     return module.exports;
//   }

//{ '0': {},
// '1':
// { [Function: require]
//   resolve: [Function: resolve],
//   main:
//    Module {
//      id: '.',
//      exports: {},
//      parent: null,
//      filename: '/Users/peterchang/Desktop/node/module-must-know/wrapper.js',
//      loaded: false,
//      children: [],
//      paths: [Array] },
//   extensions: { '.js': [Function], '.json': [Function], '.node': [Function] },
//   cache: { '/Users/peterchang/Desktop/node/module-must-know/wrapper.js': [Object] } },
// '2':
// Module {
//   id: '.',
//   exports: {},
//   parent: null,
//   filename: '/Users/peterchang/Desktop/node/module-must-know/wrapper.js',
//   loaded: false,
//   children: [],
//   paths:
//    [ '/Users/peterchang/Desktop/node/module-must-know/node_modules',
//      '/Users/peterchang/Desktop/node/node_modules',
//      '/Users/peterchang/Desktop/node_modules',
//      '/Users/peterchang/node_modules',
//      '/Users/node_modules',
//      '/node_modules' ] },
// '3': '/Users/peterchang/Desktop/node/module-must-know/wrapper.js',
// '4': '/Users/peterchang/Desktop/node/module-must-know' }