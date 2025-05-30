class Light {
    on() { console.log("💡 Light is ON"); }
    off() { console.log("🌑 Light is OFF"); }
}

class TurnOnCommand {
    constructor(light) { this.light = light; }
    execute() { this.light.on(); }
}

class TurnOffCommand {
    constructor(light) { this.light = light; }
    execute() { this.light.off(); }
}

class Remote {
    setCommand(command) { this.command = command; }
    pressButton() { this.command.execute(); }
}

const light = new Light();
const remote = new Remote();

remote.setCommand(new TurnOnCommand(light));
remote.pressButton(); // 💡 Light is ON

remote.setCommand(new TurnOffCommand(light));
remote.pressButton(); // 🌑 Light is OFFz