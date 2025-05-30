export default class PusatDataSingleton {
  constructor() {
    if (PusatDataSingleton._instance) return PusatDataSingleton._instance;
    this.DataTersimpan = [];
    PusatDataSingleton._instance = this;
  }

  static getInstance() {
    if (!PusatDataSingleton._instance) {
      PusatDataSingleton._instance = new PusatDataSingleton();
    }
    return PusatDataSingleton._instance;
  }

  AddData(input) {
    this.DataTersimpan.push(input);
  }

  DeleteData(index) {
    if (index >= 0 && index < this.DataTersimpan.length) {
      this.DataTersimpan.splice(index, 1);
    }
  }

  GetAllData() {
    return this.DataTersimpan;
  }

  PrintData() {
    console.log("Isi Data:");
    this.DataTersimpan.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
}
