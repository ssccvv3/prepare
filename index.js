var fs= require('fs');
// /dev/stdin 혹은 해당 위치 파일 index.js //
var input = fs.readFileSync('/dev/stdin').toString().split(' ')
// input 넣고 빼고 차이//
var a = parseInt(input[0])
var b = parseInt(input[1])
console.log(a*b)

// input 넣고 빼고 차이//