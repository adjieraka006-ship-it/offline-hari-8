const fs = require('fs'); // <-- BARIS INI YANG KURANG
const readln = require('readline');

const rl = readln.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// membuat folder data
const dirpath = './data';
if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath);
}

// membuat file contacts.json jika belum ada
const datapath = './data/contacts.json';
if (!fs.existsSync(datapath)) {
    fs.writeFileSync(datapath, '[]', 'utf-8');
}

rl.question('Nama: ', (nama) => {
    rl.question('No Hp: ', (nohp) => {
        // PERTANYAAN USIA DITAMBAHKAN DI SINI
        rl.question('Usia: ', (usia) => {
            // PERTANYAAN HOBI DITAMBAHKAN DI SINI
            rl.question('Hobi: ', (hobi) => {
                const contact = { 
                    nama: nama, 
                    nohp: nohp, 
                    usia: usia, // data usia ditambahkan ke objek
                    hobi: hobi,   // data hobi ditambahkan ke objek
                };
                
                const file = fs.readFileSync('data/contacts.json', 'utf-8');
                const contacts = JSON.parse(file);
                
                contacts.push(contact);
                
                fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2)); // `null, 2` agar file JSON rapi
                
                console.log('Terima kasih! Data Anda berhasil disimpan.');

                rl.close();
            });
        });
    });
});