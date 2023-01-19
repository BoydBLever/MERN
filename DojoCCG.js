class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
    attack(target) {
        // reduce target res by power
        target.power -= 2;
        return this;
    }
    play(target) {
        if (target instanceof Unit) {
            // implement card text here
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost)
        this.power = power;
        this.res = res;
    }
}

class Effect extends Card {
    constructor (name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
}

// Make an instance of Unit called "Red Belt Ninja"
const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
console.log(RedBeltNinja);
// Make an instance of Unit called "Black Belt Ninja"
const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
// Make an instance of Effect called "Hard Algorithm"
const HardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", "+3");
// Make an instance of Effect called "Unhandled Promise Rejection"
const UnhandledPromiseRejection = new Effect("Unhandled promise rejection", 1, "reduce target's resilience by 2", "resilience", "-2");
// Make an instance of Effect called "Pair Programming"
const PairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", "+2");
// Red Belt Ninja uses the attack method on Black Belt Ninja


RedBeltNinja.attack(BlackBeltNinja);
console.log(BlackBeltNinja);