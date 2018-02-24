// require.resolve() can be used, for example, 
// to check whether an optional package is installed or not 
// and only use it when it’s available.

console.log('-=-=-= require.resolve("/path/to/module.js") -=-=-=')
console.log(require.resolve('./node_modules/find-me.js'))
console.log('-=-=-= end -=-=-=')
console.log(require.resolve('./node_modules/not-existed.js'))
