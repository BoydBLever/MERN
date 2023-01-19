class Ninja {
    constructor(name, health = 10, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = 5;
        this.strength = 5;
    }
    sayName() {
        console.log(`My name is Ninja ${this.name}`)
        return this;
    }

    showStats() {
        console.log(`Ninja ${this.name} has strength ${this.strength}, speed ${this.speed} and health ${this.health}`);
        return this;

    }

    drinkWater() {
        console.log(`Ninja ${this.name} drank water.`)
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName().showStats().drinkWater().showStats();
