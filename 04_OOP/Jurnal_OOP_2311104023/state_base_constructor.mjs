class PosisiKarakterGame {
    constructor(NIM) {
        this.state = "Berdiri";
        this.NIM = NIM;
    }

    tekanTombol(tombol) {
        let prevState = this.state;
        
        const transisi = {
            "Berdiri": { "TombolS": "Jongkok", "TombolX": "Terbang" },
            "Jongkok": { "TombolW": "Berdiri", "TombolS": "Tengkurap" },
            "Tengkurap": { "TombolW": "Jongkok" },
            "Terbang": { "TombolX": "Berdiri", "TombolS": "Jongkok" }
        };

        if (transisi[this.state] && transisi[this.state][tombol]) {
            this.state = transisi[this.state][tombol];
        }

        let nimMod = this.NIM % 3;
        if (nimMod === 0) {
            if (tombol === "TombolS") console.log("Tombol arah bawah ditekan");
            if (tombol === "TombolW") console.log("Tombol arah atas ditekan");
        } else if (nimMod === 1) {
            if (this.state === "Berdiri") console.log("Posisi standby");
            if (this.state === "Tengkurap") console.log("Posisi istirahat");
        } else if (nimMod === 2) {
            if (prevState === "Terbang" && this.state === "Jongkok") console.log("Posisi landing");
            if (prevState === "Berdiri" && this.state === "Terbang") console.log("Posisi take off");
        }

        console.log(`State sekarang: ${this.state}`);
    }
}

const NIM = 123456;
const karakter = new PosisiKarakterGame(NIM);

karakter.tekanTombol("TombolS");
karakter.tekanTombol("TombolW");
karakter.tekanTombol("TombolX");
karakter.tekanTombol("TombolS");
