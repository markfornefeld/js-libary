function Person(name, job) {
  this.name = name;
  this.job = job;
  this.print = function() {
    console.log(this.name + ', ' + this.job);
  };
}
var thatGuy = new Person("Jack", "coder");
thatGuy.print();

function fib(n) {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
console.log("Fib(9) = " + fib(9));

var obj = { a: 13, b: 42, c: 211 };
for (i in obj) console.log(i + ': ' + obj[i]); 

var vowelCount = 0;
var favFood = "the crazy quick brown fox jumped over the logs ";
console.log(favFood.length);
for (letter in favFood) {
    if (favFood[letter].toLowerCase() === "a" || favFood[letter].toLowerCase() === "e" || favFood[letter].toLowerCase() === "i" || favFood[letter].toLowerCase() === "o" || favFood[letter].toLowerCase() === "u") {
        vowelCount++
    }
}
console.log("There are " + vowelCount + " vowels in " + favFood);

function sum() {
    var x = 0;
    for (var i = 0; i < arguments.length; ++i) {
        x += arguments[i];
    }
    return x;
}
console.log(sum(1, 2)); // returns 3
console.log(sum(1, 2, 3)); // returns 6

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;  // 0! = 1! = 1
    }else(n)
    return n * factorial(n - 1);
}
console.log(factorial(3));

function counter() {
var counter = 0;
    return ++counter;
    };
console.log(counter(3));
