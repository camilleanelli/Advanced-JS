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
// console.log(john);
// john.calculateAge();

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
// console.log(shoupi);
// shoupi.sayHello();


//Object.create method

var personProto = {
  calculateAge: function() {
    console.log(2017 - this.yearOfBirth);
  }
}

var joan = Object.create(personProto);
joan.name = 'joan';
joan.yearOfBirth = 1990;
joan.job = 'teacher';

// console.log(joan);
// joan.calculateAge();

//primitives vs objects


//primitives
var a = 23;
var b = a;

a = 46; //a is not mutate, it is a new object, so b keeps the initiale value of a

console.log(a);
console.log(b);

//objects
var obj1 = {
  name: 'john',
  age: 50
}


var obj2 = obj1;
obj1.age = 30;

// console.log(obj1.age);
// console.log(obj2.age);


//functions

var age = 27;
var obj = {
  name:'Jonas',
  city: 'Paris'
}


function change(a, b) {
  a = 30;
  b.city = 'San Fransisco';
}


change(age, obj);

console.log(age);//age has not changed because age is a primitive, so the value can't be changed inside the function.
console.log(obj); //obj has changed because we pass a reference of the object into the function, but not THE object

//passing function as arguments:

var years = [1990, 1986, 1980, 1991, 1970];
function calculateAge(el) {
  return 2017 - el; //return is required to avoid the undefined value!!!
}

function arrayCalc(arr, fn) {
  var arrRes = [];
  for(var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

//let do other functions
function isFullAge(el) {
  return el >= 18;
}

function masHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  }else {
    return -1;
  }
}


var ages = arrayCalc(years, calculateAge); //callback function wich is called later
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, masHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);





































