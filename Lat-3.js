// Core Modules
const { error } = require('console');
const fs = require('fs');
const{ console } = require ('inspector');

// Menuliskan string ke file (Synchronous)
// try {
//     fs.writeFileSync('data/test.txt', 'Hello Shync');
// } catch (e) {
//     console.log(e);
// }

// Menuliskan string ke file (Asynchronous)
fs.writeFile('data/TextDecoderStream.txt', 
    'Hello Asynchoronous', (err) => {
    console.log(err);
});


// const data = fs.readFileSync('data/test.txt');
// console.log(data);

// Cara 2: Menggunakan encoding 'utf-8'
// const data1 = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data1);


