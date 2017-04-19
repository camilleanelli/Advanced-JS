//every object has a prototype property => inheritance is possible in JS
// the prototype property is where we put methods and properties that we want other objects to inherite.

//function constructor
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

//prototype for methods
Person.prototype.calculateAge = 
  function() {
    console.log(2016 - this.yearOfBirth);
  };

//prototype for properties
Person.prototype.lastName = 'Smith';

var john = new Person('john', 1990, 'teacher');
console.log(john);
john.calculateAge();

var jane = new Person('jane', 1969, 'designer');
var mark = new Person('mark', 1980, 'programmer');


//other exemple

var Dog = function(name, race, color, age) {
  this.name = name;
  this.race = race;
  this.color = color;
  this.age = age;
}

Dog.prototype.sayHello = function() {
  alert("Hello " + this.name + ' !');
}

var shoupi = new Dog('shoupi', 'yorkshire', 'yellow', 3);
console.log(shoupi);
shoupi.sayHello();
