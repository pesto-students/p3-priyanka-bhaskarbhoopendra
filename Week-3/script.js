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

// if we want runner obejct to be able to fly
let fly = flyer.fly.bind(runner, 30);

console.log(run()); // Flyer can run
console.log(fly()); // Runner can fly
