class Vehicle {
    constructor(color) {
      this.color = color;
    }
  
    move() {
      console.log('move');
    }
  }
  
  class Car extends Vehicle {
    constructor(color) {
      super(color);
      this.weight = 1500;
  
    }
    move(){//if we want that in circle object move function will behave differently
      super.move();
      console.log('circle move');
    }
  
    drive() {
      console.log("drive");
    }
  }

const car1 = new Car("red");
