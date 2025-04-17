import fs from 'fs';

class DataMahasiswa2311104023 {
  static ReadJSON() {
    const raw = fs.readFileSync('tp7_1_2311104023.json');
    const data = JSON.parse(raw);

    console.log(`Nama ${data.nama.depan} ${data.nama.belakang} dengan nim ${data.nim} dari fakultas ${data.fakultas}`);
  }
}

DataMahasiswa2311104023.ReadJSON();
