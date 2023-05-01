class Car {
  constructor(model, velocity = 0, age = 0) {
    this.model = model;
    this.velocity = velocity;
    this.age = age;
  }

  speedUp() {
    this.velocity += 1;
  }

  speedDown() {
    if (this.velocity !== 0) {
      this.velocity -= 1;
    }
  }
}

class Bus extends Car {
  constructor(model, velocity = 0, age = 0, wheels = 4) {
    super(model, (velocity = 0), (age = 0));
    this.wheels = wheels;
  }
}

const car = new Car("BMW");
car.speedUp();
console.log("🚀 ~ file: classes.js:18 ~ car:", car);

const bus = new Bus("Mercedez");
console.log("🚀 ~ file: classes.js:31 ~ bus:", bus)
