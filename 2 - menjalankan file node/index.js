// file index disini bisa menjadi file root/file utama
// untuk menjalankan file di runtime bisa menggunakan "node coba" atau "node coba.js" atau "node ."
// khusus untuk file index bisa run menggunakan "node ." karna setiap file yang bernama index akan dianggap root/file utama

// const printAge = require('./coba');

// example :
// const nama = ('donny gantenggg');
// console.log(nama);
// const printName = (nama) => `Hi besti, my name is ${nama}`;
// console.log(printName('Donny Pratama'));
// console.log(window);

// how to run file index and other file js in 1 step (its mean to call other file js)
// using require to call/connect with another file js
//  use "./" when your file is same place with your index file
// use "../" when your file is not same place with your index file (its mean outside)
const printAge = require('./coba');
// console.log('Hello Bestiii');
console.log(printAge('19 Years Old'));