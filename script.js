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


//functions returning functions:

function interviewQuestion(job) {
  if(job === "designer") {
    return function(name) {
      console.log(name + " can you please explain what is your UX design?");
    }
  }
  else if(job === "teacher") {
    return function(name) {
      console.log(name + " what subject do you teach?");
    }
  }else {
    return function(name) {
      console.log("hello " + name + ", what do you do ?");
    }
  }
}

var teacherQuestion = interviewQuestion('teacher'); //=> return function 
teacherQuestion('john'); //=> return string inside console

var designerQuestion = interviewQuestion('designer');
designerQuestion('Mark');

//other way to call 2 functions
var manuTeacher = interviewQuestion('teacher')('Manu');

//IIFE  immediately invoked function expressions

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

//we can pass an argument 
(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= (5 - goodLuck));
})(5);

// closures :

function retirement(retirementAge) {
  var a = ' years left until the retirement';
  return function(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66); //=>  it returns a function
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990); 
retirementGermany(1996);
retirementIceland(1986);

//other example

function question(job) {
  return function(name) {
    if(job === 'teacher') {
      console.log(name + " what subject do you teach?");
    }else if(job === 'designer') {
      console.log(name + " can you please explain what is your UX design?");
    }else {
      console.log("hello " + name + ", what do you do ?");
    }
  }
}

question('teacher')('Mark');

//bind, call and apply

var john = {
  name: "john",
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if(style === 'formal') {
      console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m a ' + this.job + ' and I\'m '+ this.age + ' years old.');
    }else if(style === 'friendly') {
      console.log('Hello ! What\'s up? I\'m ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
    }
  }
}

var emily = {
  name: "emily",
  age: 40,
  job: "designer"
}

john.presentation('formal', 'morning');

// call method
john.presentation.call(emily, 'formal', 'afternoon');

// apply method
// john.presentation.apply(emily, ['formal', 'afternoon']);  
//=> can't work here because we pass an array as argument, and the function is not waiting for an array.

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('afternoon');

var emilyFriendly = john.presentation.bind(emily, 'friendly');
emilyFriendly('morning');




















