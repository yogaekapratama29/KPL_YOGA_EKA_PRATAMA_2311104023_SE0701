import crypto from "crypto";

class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 200) {
            throw new Error("Judul video tidak valid (null atau melebihi 200 karakter).");
        }
        this.id = crypto.randomInt(10000, 99999); 
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        if (typeof count !== 'number' || count < 0 || count > 25000000) {
            throw new Error("Jumlah play count tidak valid (harus angka positif maksimal 25 juta).");
        }
        this.playCount += count;
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}, Title: ${this.title}, PlayCount: ${this.playCount}`);
    }
}

class SayaTubeUser {
    constructor(username) {
        if (!username || username.length > 100) {
            throw new Error("Username tidak valid (null atau melebihi 100 karakter).");
        }
        this.id = crypto.randomInt(10000, 99999); 
        this.username = username; // Properti username diinisialisasi di sini
        this.uploadedVideos = [];
    }

    addVideo(video) {
        if (!(video instanceof SayaTubeVideo) || video.playCount >= Number.MAX_SAFE_INTEGER) {
            throw new Error("Video tidak valid atau play count melebihi batas integer aman.");
        }
        this.uploadedVideos.push(video);
    }

    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    printAllVideoPlayCount() {
        console.log(`User: ${this.username}`);
        for (let i = 0; i < Math.min(8, this.uploadedVideos.length); i++) {
            console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
        }
    }
}

try {
    const user = new SayaTubeUser("Yoga Pratama");

    const video1 = new SayaTubeVideo("Review Film 1 oleh Yoga Pratama");
    const video2 = new SayaTubeVideo("Review Film 2 oleh Yoga Pratama");
    const video3 = new SayaTubeVideo("Review Film 3 oleh Yoga Pratama");

    video1.increasePlayCount(100);
    video2.increasePlayCount(200);
    video3.increasePlayCount(300);

    user.addVideo(video1);
    user.addVideo(video2);
    user.addVideo(video3);

    user.printAllVideoPlayCount();
    console.log(`Total Play Count: ${user.getTotalVideoPlayCount()}`);
} catch (error) {
    console.error(error.message);
}
