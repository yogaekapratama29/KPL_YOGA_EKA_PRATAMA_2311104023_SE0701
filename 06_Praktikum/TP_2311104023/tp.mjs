import crypto from "crypto";

class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 100) {
            throw new Error("Judul video tidak valid (null atau melebihi 100 karakter).");
        }

        this.id = crypto.randomInt(10000, 99999);
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        
        if (typeof count !== 'number' || count <= 0 || count > 10000000) {
            throw new Error("Jumlah play count tidak valid (harus angka positif maksimal 10.000.000).");
        }


        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
            throw new Error("Play count melebihi batas maksimum integer aman.");
        }

        this.playCount += count;
    }

    printVideoDetails() {
   
        console.log(`ID: ${this.id}, Title: ${this.title}, PlayCount: ${this.playCount}`);
    }
}
try {
    const video = new SayaTubeVideo("Tutorial Design By Contract - Yoga Eka Pratama");
    video.increasePlayCount(5000000); 
    video.printVideoDetails(); 
} catch (error) {
    console.error("Error:", error.message);
}
