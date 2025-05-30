import PusatDataSingleton from './src/pusatDataSingleton.js';

// A. Ambil instance
const data1 = PusatDataSingleton.getInstance();
const data2 = PusatDataSingleton.getInstance();

// B. Tambah data melalui data1
data1.AddData("Aldo");
data1.AddData("Bagas");
data1.AddData("Candra");
data1.AddData("Dimas");
data1.AddData("Edifier");

// C. Cetak lewat data2 (harus muncul semua data)
console.log("\nData dari data2:");
data2.PrintData();

// D. Hapus asisten praktikum via data2
data2.DeleteData(data2.GetAllData().indexOf("Dimas"));

// E. Cetak ulang via data1 (asisten harus hilang)
console.log("\nData dari data1 setelah penghapusan:");
data1.PrintData();

// F. Hitung jumlah data
console.log(`\nJumlah data (data1): ${data1.GetAllData().length}`);
console.log(`Jumlah data (data2): ${data2.GetAllData().length}`);