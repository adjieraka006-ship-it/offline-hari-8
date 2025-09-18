const prompt = require("prompt-sync")

function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

let mahasiswa = {
    nama: "asep",
    alamat: "Jekardah",
    cetakMhs() {
        return `Halo, nama ${this.nama} dan alamat ${this.alamat}`;
    }
};

module.exports.cetakNama = cetakNama;
module.exports.PI = PI;
module.exports.mahasiswa = mahasiswa;