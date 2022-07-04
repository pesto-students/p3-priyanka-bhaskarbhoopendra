// ----------------bind----------------------
let runner = {
  name: "Runner",
  run: function (speed) {
    console.log(this.name + " runs at " + speed + " mph.");
  },
};

let flyer = {
  name: "Flyer",
  fly: function (speed) {
    console.log(this.name + " flies at " + speed + " mph.");
  },
};

// if we want flyer object to be able to run
let run = runner.run.bind(flyer, 20);

// if we want runner object to be able to fly
let fly = flyer.fly.bind(runner, 30);

console.log(run()); // Flyer can run
console.log(fly()); // Runner can fly

// ----------------call----------------------

const human = {
  firstName: "Bhoopendra",
  lastName: "Bhaskar",
  age: 23,
};

function greet() {
  const string = `My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old :)`;
  console.log(string);
}

// passing object as this value in call() method
greet.call(human);

// ----------------apply----------------------

let color1 = ["Red", "Green", "Blue"];
let color2 = ["Yellow", "Black"];

// appending two arrays color1 and color2
color1.push.apply(color1, color2);

console.log(color1);
