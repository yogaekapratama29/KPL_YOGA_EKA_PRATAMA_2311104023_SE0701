import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const produk = {
    "1": 15000,
    "2": 20000,
    "3": 15000,
    "4": 5000,
    "5": 20000
};

console.log(`\n`);
console.log("Selamat datang di Toko XYZ");
console.log(`\n`);
console.log("Pilih produk yang ingin anda dibeli:");
console.log("1. Beras - Rp15000");
console.log("2. Minyak - Rp20000");
console.log("3. Sabun - Rp15000");
console.log("4. Mie Instan - Rp5000");
console.log("5. Aqua Galon - Rp20000");

let total = 0;

function hitungProduk() {
    input.question("Masukkan nomor produk yang dipilih: ", (pilihan) => {
        if (produk[pilihan]) {
            total += produk[pilihan];
            input.question("Apakah ingin menambah produk lagi? (ya/tidak): ", (jawaban) => {
                if (jawaban.toLowerCase() === "ya") {
                    hitungProduk();
                } else {
                    let kategori = "Tidak Ada Diskon";
                    if (total > 100000) {
                        kategori = "Diskon Besar";
                    } else if (total >= 50000) {
                        kategori = "Diskon Sedang";
                    }

                    console.log(`\nTotal Harga: Rp${total}`);
                    console.log(`Kategori Diskon: ${kategori}`);
                    input.close();
                }
            });
        } else {
            console.log("Pilihan tidak valid, silakan coba lagi.");
            hitungProduk();
        }
    });
}

hitungProduk();
