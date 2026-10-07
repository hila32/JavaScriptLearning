//inheritance

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
    this.draw = function () {
      console.log("draw");
    };
    let defaultLocation = { x: 0, y: 0 };
    Object.defineProperty(this, "defaultLocation", {
      get: function () {
        return defaultLocation;
      },
    });
  }
  
  function Sqare() {
    this.radius = 0;
  }
  
  function Shape(color) {
    this.color = color;
    this.duplicate = function () {
      console.log("duplicate");
    };
  }
  
  function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
  }
  
  function HtmlElement() {
    this.click = function () {
      console.log("clicked");
    };
  }
  
  HtmlElement.prototype.focus = function () {
    console.log("focused");
  };
  
  function HtmlSelectElement(...items) {
    this.addItem = function () {
      for (let arg of arguments) items.push(arg);
    };
  
    this.item = items;
  
    this.removeItems = function () {
      for (let arg of arguments) this.item.splice(this.item.indexOf(arg), 1);
    };
  
    this.render = function () {
      return `
      <select>${this.item
        .map(
          (item) => `
        <option>${item}</option>`
        )
        .join("")}
      </select>`;
    };
  }
  
  extend(HtmlSelectElement, HtmlElement);
  
  HtmlSelectElement.prototype = new HtmlElement();
  HtmlSelectElement.prototype.constructor = HtmlSelectElement;
  
  function HtmlImageElement(src) {
    this.src = src;
  
    this.render = function () {
      return `<img src = "${this.src}" />`;
    };
  }
  
  HtmlImageElement.prototype = new HtmlElement();
  HtmlImageElement.prototype.constructor = HtmlImageElement;
  