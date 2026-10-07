const _radius = new WeakMap();

class CircleClass {
  constructor(radius) {
    _radius.set(this, radius);
    this.move = function () {
      console.log("move");
    }; //save on the instance
  }
  readRadius() {
    console.log(_radius.get(this));
  }
  draw() {
    console.log("draw"); //save on the prototype
  }
  static parseJson(str) {
    const radius = JSON.parse(str).radius;
    return new CircleClass(radius);
  }
}

const c = CircleClass.parseJson('{ "radius": 1 }');

