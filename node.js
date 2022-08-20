// lib.js
var lib = {
    square: function (x) {
        return x * x;
    },
    sum: function (a, b) {
        return a + b;
    }
 };
 module.exports = lib;
 // main.js
 var lib = require('./lib.js')
 console.log(lib.square(5));  // 25
 console.log(lib.sum(4, 3));   // 



 
// Questions: 
// 1. Show products from /products
// 2. Show fruits from /products/fruits
// 3. Show vegetables from 
// /products/vegetable