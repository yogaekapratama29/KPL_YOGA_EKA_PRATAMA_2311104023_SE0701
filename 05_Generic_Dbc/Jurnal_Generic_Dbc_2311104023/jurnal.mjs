import readline from "readline";

class Penjumlahan {
    static JumlahTigaAngka(a, b, c) {
        return a + b + c;
    }
}

class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    AddNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date());
    }

    PrintAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index]}`);
        });
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukkan NIM Anda: ", (nim) => {
    const lastDigit = parseInt(nim[nim.length - 1]);
    let dataType;
    
    if ([1, 2].includes(lastDigit)) dataType = "float";
    else if ([3, 4, 5].includes(lastDigit)) dataType = "double";
    else if ([6, 7, 8].includes(lastDigit)) dataType = "int";
    else if ([9, 0].includes(lastDigit)) dataType = "long";
    else {
        console.log("NIM tidak valid");
        rl.close();
        return;
    }

    console.log(`Tipe data yang digunakan: ${dataType}`);
    
    rl.question("Masukkan tiga angka dipisahkan dengan spasi: ", (input) => {
        const angka = input.split(" ").map(Number);
        if (angka.length !== 3 || angka.some(isNaN)) {
            console.log("Input tidak valid, harus 3 angka.");
            rl.close();
            return;
        }
        
        const hasil = Penjumlahan.JumlahTigaAngka(...angka);
        console.log(`Hasil penjumlahan: ${hasil}`);
        
        const db = new SimpleDataBase();
        angka.forEach((num) => db.AddNewData(num));
        db.PrintAllData();

        rl.close();
    });
});
