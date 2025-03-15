class KodeBuah {
    constructor() {
        this.tabelKodeBuah = {
            "Apel": "A00",
            "Aprikot": "B00",
            "Alpukat": "C00",
            "Pisang": "D00",
            "Paprika": "E00",
            "Kurma": "K00",
            "Durian": "L00",
            "Anggur": "M00",
            "Melon": "N00",
            "Semangka": "O00"
        };
    }

    getKodeBuah(namaBuah) {
        return this.tabelKodeBuah[namaBuah] || "Kode tidak ditemukan";
    }
}


const kodeBuah = new KodeBuah();

const daftarBuah = ["Apel", "Durian", "Anggur", "Semangka", "Mangga"];
daftarBuah.forEach(buah => {
    console.log(`${buah}: ${kodeBuah.getKodeBuah(buah)}`);
});
