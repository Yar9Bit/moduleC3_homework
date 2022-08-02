class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
    plugIn() {
        console.log(this.name + " Подключен ");
        this.isPlugged = true;
    }
    unplug() {
        console.log(this.name + " Отключен ");
        this.isPlugged = false;
    }
}

class Lamp extends ElectricalAppliance {
    constructor(name, power, brand, bulbType) {
        super(name, power);
        this.brand = brand;
        this.bulbType = bulbType;
        this.isPlugged = true;
    }
}

class PC extends ElectricalAppliance {
    constructor(name, power, brand, type, functionality) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.functionality = functionality;
        this.isPlugged = false;
    }
}

const tableLamp = new Lamp("Настольная Лампа", "20", "W", "LED")

const homePC = new PC("Компьютер", "90", "HP", "NoteBook", "For Work")

tableLamp.unplug();

homePC.plugIn();

console.log(homePC)
console.log(tableLamp)