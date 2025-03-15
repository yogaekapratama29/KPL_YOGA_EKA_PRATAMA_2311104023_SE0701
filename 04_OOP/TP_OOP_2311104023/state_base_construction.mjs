class DoorMachine {
    constructor() {
        this.state = 'Terkunci';
    }

    kunciPintu() {
        this.state = 'Terkunci';
        console.log('Pintu terkunci');
    }

    bukaPintu() {
        this.state = 'Terbuka';
        console.log('Pintu tidak terkunci');
    }
}

const door = new DoorMachine();
door.kunciPintu();
door.bukaPintu()