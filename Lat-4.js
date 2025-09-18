// ## Contoh 1: Menanyakan Satu Pertanyaan
// Kode ini hanya akan menanyakan nama, kemudian langsung menutup program.

const readln = require('readline');
const rl = readln.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukan Nama Anda : ', (nama) => {
    console.log(`Terima Kasih ${nama}`);
    rl.close();
});

// ## Contoh 2: Menanyakan Dua Pertanyaan (Bersarang)
// Kode ini akan menanyakan nama, dan setelah nama dimasukkan, 
// ia akan menanyakan nomor HP di dalam pertanyaan pertama.

// const readln = require('readline');
// const rl = readln.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('Masukan Nama Anda : ', (nama) => {
//     rl.question('Masukan No Hp : ', (nohp) => {
//         console.log(`Terima Kasih ${nama}, sudah input ${nohp}`);
//         rl.close();
//     });
// });