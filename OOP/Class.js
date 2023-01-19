class Vehicle {
    constructor(manufacturer, model, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.miles = 0;
    }
    drive() {
        this.miles += 10;
        console.log(`You drove your ${this.constructor.name} and it now has ${this.miles} miles on it.`);
    }
    parentFunction() {
        return "This is coming from the parent!";
    }
}

class M5 extends Vehicle {
    constructor(color) {
        super("BMW", "M5", color);
    }
    childFunction() {
        const message = super.parentFunction();
        console.log(message);
    }
}
const m5 = new M5("Blue");
m5.childFunction();