const Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
  console.log({ name, age });
};

//TODO create the class teacher and a method teach
function Teacher() {
  this.teach = (subject) => {
    this.subject = subject;
    console.log(`${this.name} teaches ${this.subject}`);
  };
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

var him = new Teacher();
him.initialize("Adam", 45);
him.teach("Physics");
