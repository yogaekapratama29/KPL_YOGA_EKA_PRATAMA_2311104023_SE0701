export default class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} menerima notifikasi: ${data}`);
  }
}
