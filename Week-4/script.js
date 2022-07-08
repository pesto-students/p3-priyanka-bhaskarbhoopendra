const Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

//TODO create the class teacher and a method teach

var him = new Teacher();

him.initialize("Adam", 45);
