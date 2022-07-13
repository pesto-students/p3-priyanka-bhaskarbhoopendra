const Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
  console.log({ name, age });
};

//TODO create the class teacher and a method teach
function Teacher() {
  this.teach = (value) => {
    console.log(value);
  };
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

var him = new Teacher();
him.initialize("adam", 15);
him.teach("Adam");
