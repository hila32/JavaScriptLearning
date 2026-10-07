
function maxNum(a, b) {
    return a > b ? console.log(a, "is bigger") : console.log(b, "is bigger");
  }
  
  function isLandscape(width, hight) {
    return width > hight;
  }
  
  function fizzBuzz(input) {
    if (typeof input !== "number") return NaN; // NaN -> not a number
  
    if (input % 3 == 0 && input % 5 == 0) return "fizzBuzz";
  
    if (input % 3 == 0) return "fizz";
  
    if (input % 5 == 0) return "buzz";
  
    return input;
  }
  
  function chekSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed > speedLimit + kmPerPoint) {
      let points = Math.floor((speed - speedLimit) / kmPerPoint);
      if (points > 12) console.log("suspended");
      else console.log("points: ", points);
    } else console.log("OK");
  }
  
  function evenOddNumbers(number) {
    for (let i = 0; i <= number; i++) {
      const message = i % 2 === 0 ? "EVEN" : "ODD";
      console.log(i, message);
    }
  }
  
  function countTruthy(array) {
    let count = 0;
    for (let val of array) {
      if (val) count++;
    }
    return count;
  }
  
  function showProperties(obj) {
    for (key in obj) if (typeof obj[key] === "string") console.log(key, obj[key]);
  }
  
  function sumLimit(limit) {
    let sum = 0;
  
    for (i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;
  
    return sum;
  }
  
  function calculateAverage(grades) {
    let sum = 0;
  
    for (let grade of grades) sum += grade;
  
    return sum / grades.length;
  }
  
  function calculategrade(grades) {
    const avarage = calculateAverage(grades);
    if (avarage < 60) return "F";
    if (avarage < 70) return "D";
    if (avarage < 80) return "C";
    if (avarage < 90) return "B";
    return "A";
  }
  
  function printAsterisk(num) {
    for (let i = 1; i <= num; i++) {
      console.log("*".repeat(i)); // repeat on the char i times
    }
  }
  
  function checkPrime(num) {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
  
    return true;
  }
  
  function showPrimesNumbers(limit) {
    for (let num = 2; num <= limit; num++) if (checkPrime(num)) console.log(num);
  }
  
  //factory function- camel notation
  //to create an object
  
  function createAddress(street, city, zipCode) {
    return {
      street,
      city,
      zipCode,
    };
  }
  
  let address = createAddress("a", "b", "c");
  
  //creating a constructor function
  const Person = new Function(
    "name",
    "age",
    `
      this.name = name;
      this.age = age;
      this.print = function() {
          console.log("your in ",name)
      }
      `
  );
  
  //constructor function- pascal notation
  //to create an object
  
  function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
  }
  
  let address1 = new Address("a", "b", "c");
  let address2 = new Address("a", "b", "c");
  
  function areEqual(address1, address2) {
    massage = true;
    for (key in address1)
      if (address1[key] !== address2[key]) return console.log(false);
    console.log(true);
  }
  
  `to check if they have the same reference (pointer)`;
  function areSame(address1, address2) {
    return console.log(address1 === address2);
  }
  
  // if i want to find an object in array
  const courses = [
    { name: "a", id: 1234 },
    { name: "b", id: 12345 },
  ];
  
  const resault = courses.find(function (course) {
    return course.name === "a";
  });
  
  const resaultShortWay = courses.find((course) => course.name === "b");
  
  const courses2 = [
    { id: 1, name: "js" },
    { id: 2, name: "Nodejs" },
    { id: 3, name: "C++" },
  ];
  
  function sortedObject(courses2) {
    courses2.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
  
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    return courses2;
  }
  
  const numbers = [1, -1, 2, 3, -1, 4, -1, 5];
  
  const resaultNum = numbers
    .filter((num) => num >= 0)
    .map((num) => ({ value: num }));
  
  function arrayFromRange(min, max) {
    const array = [];
    for (i = min; i <= max; i++) array.push(i);
    return array;
  }
  
  function except(array, excluded) {
    let output = [];
    for (element of array) if (!excluded.includes(element)) output.push(element);
    return output;
  }
  
  function move(array, index, offset) {
    let output = [...array];
    const position = index + offset;
    if (position >= array.length || position < 0) {
      console.error("invalid offset");
      return;
    }
    output.splice(index, 1, array[position]);
    output.splice(position, 1, array[index]);
    return output;
  }
  
  function numApear(array, searchElement) {
    if (!Array.isArray(array)) throw new Error("its not an array");
  
    return array.reduce((elementApear, currentVal) => {
      let count = currentVal === searchElement ? 1 : 0;
      return elementApear + count;
    }, 0);
  }
  
  try {
    numApear([1, 2, 3, 4, 1], 1);
  } catch (e) {
    console.log(e.message); // property in Error object
  }
  
  function getMax(array) {
    if (array.length === 0) return undefined;
    return array.reduce((a, b) => (a > b ? a : b));
  }
  
  const moviesObject = [
    { title: "a", year: 2018, rating: 4.5 },
    { title: "b", year: 2018, rating: 4.7 },
    { title: "c", year: 2018, rating: 3 },
    { title: "d", year: 2017, rating: 4.5 },
  ];
  
  function movies(movies) {
    let arrResualt = movies
      .filter((m) => m.year === 2018 && m.rating >= 4)
      .sort((a, b) => a.rating - b.rating)
      .reverse()
      .map((m) => m.title);
  
    return arrResualt;
  }
  
  function sumWithArguments() {
    let total = 0;
    for (let val of arguments) total += val;
    console.log(arguments);
    return console.log(total);
  }
  
  function sumWithRestOperator(...args) {
    return args.reduce((a, b) => a + b);
  }
  
  function chart(discount, ...prices) {
    let total = prices.reduce((a, b) => a + b);
    return console.log(total * (1 - discount));
  }
  
  //how much rate you need to pay
  function interest(money, rate, years) {
    return ((money * rate) / 100) * years;
  }
  
  let person = {
    firstName: "hila",
    lastName: "sharabi",
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  
    set fullName(value) {
      if (typeof value !== "string") throw new Error(`it's not a string`);
  
      let parts = value.split(" ");
      if (parts.length !== 2) throw new Error("enter first & last name");
  
      this.firstName = parts[0];
      this.lastName = parts[1];
    },
  };
  
  try {
    person.fullName = "hila sharabi";
  } catch (e) {
    alert(e);
  }
  
  function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
  
    return items.reduce((a, b) => a + b);
  }
  
  const circle1 = {
    radius: 2,
    get area() {
      return Math.PI * this.radius * this.radius;
    },
  };
  
  function StopWatch() {
    let running,
      count,
      countEnd,
      duration = 0;
  
    this.start = function () {
      if (running) throw new Error("already started!");
      running = true;
      count = performance.now();
    };
    this.stop = function () {
      if (!running) throw new Error("not start!");
      running = false;
      countEnd = performance.now();
      duration = ((countEnd - count) / 1000).toFixed(3);
    };
    this.reset = function () {
      running = false;
      duration = 0;
      count = 0;
      countEnd = 0;
    };
    //צריך להיות לקריאה בלבד כדי שלא יהיה אפשר לשנות את הערך
    //:בגלל שזה פונקציית בניה ולא אובייקט פשוט נצטרך ליישם כך
    Object.defineProperty(this, "duration", {
      //writable: false, // read only
      enumerable: false, //abstract property
      configurable: false, // do not delete
  
      get: function () {
        if (running) throw new Error("you not stop the timer");
        return duration;
      },
    });
  }
  