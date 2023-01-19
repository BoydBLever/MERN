class Ninja {
    constructor(name, health=10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
        return this;
    }

    showStats() {
        console.log(`Name:    ${this.name}`);
        console.log(`Health:  ${this.health}`);
        console.log(`Speed:   ${this.speed}`);
        console.log(`Stength: ${this.strength}`);
        return this;
    }

    drinkSake() {
        console.log(`${this.name} drank sake.`);
        this.health += 10;
        return this;
    }
}
const ninja1 = new Ninja("Ryu");
ninja1.sayName().showStats().drinkSake().showStats();

class Sensei extends Ninja {
    constructor(name, health=200,speed=10,strength=10, wisdom){
        //health, speed, strength, wisdom
        super(name, health, speed, strength, wisdom)
        this.wisdom = 10;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }
    showStats(){
        console.log(`Name:    ${this.name}`);
        console.log(`Health:  ${this.health}`);
        console.log(`Speed:   ${this.speed}`);
        console.log(`Stength: ${this.strength}`);
        console.log(`Wisdom:  ${this.wisdom}`);
        return this;
    }
    speakWisdom(){
        console.log("What one programmer can do in one moneth, two programmers can do in two months")
        return this;
    }
}
// , "200", "10", "10", "10"
const superSensei = new Sensei("Master Splinter!");
superSensei.showStats();
superSensei.speakWisdom();
