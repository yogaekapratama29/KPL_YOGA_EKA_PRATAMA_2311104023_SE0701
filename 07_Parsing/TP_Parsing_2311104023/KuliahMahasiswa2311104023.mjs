import fs from 'fs';

class KuliahMahasiswa2311104023 {
  static ReadJSON() {
    const raw = fs.readFileSync('tp7_2_2311104023.json');
    const data = JSON.parse(raw);

    console.log("Daftar mata kuliah yang diambil:");
    data.courses.forEach((course, index) => {
      console.log(`MK ${index + 1} ${course.code} - ${course.name}`);
    });
  }
}

KuliahMahasiswa2311104023.ReadJSON();
