console.log("Hello World!");
var x; // defines the variable x and assigns to it the special value "undefined" (not to be confused with an undefined value)
var y = 2; // defines the variable y and assigns to it the value 2

function counter() {
    var count = 0;
    return function() {
        return ++count;
    };
}

var closure = counter();
console.log(closure()); // returns 1
console.log(closure()); // returns 2
console.log(closure()); // returns 3

function {
    var i = 0; // private property

    return {   // public methods
        get: function () {
            alert(i);
        },
        set: function (value) {
            i = value;
        },
        increment: function () {
            alert(++i);
        }
    };
}; // module

counter.get();       // shows 0
counter.set(6);
counter.increment(); // shows 7
counter.increment(); // shows 8

/* Finds the lowest common multiple (LCM) of two numbers */
function LCMCalculator(x, y) { // constructor function
    var checkInt = function (x) { // inner function
        if (x % 1 !== 0) {
            throw new TypeError(x + "is not an integer"); // throw an exception
        }
        return x;
    };
    this.a = checkInt(x);
    this.b = checkInt(y);
}
prototype =
    constructor: LCMCalculator(); // whenning a prototype, set the constructor property appropriately
    gcd: function () { 
        // Euclidean algorithm:
        var a = Math.abs(this.a), b = Math.abs(this.b), t;
        if (a < b) {
            // swap variables
            t = b;
            b = a;
            a = t;
        }
        while (b !== 0) {
            t = b;
            b = a % b;
            a = t;
        }
        this['gcd'] = function () {
            return a;
        };
        return a;
    },
    
    lcm : function (){
        var lcm = this.a/this.gcd()*this.b;
        // Only need to calculate lcm once, so "redefine" this method.
        this.lcm = function () {
            return lcm;
        };
        return lcm;
    },
    toString: function () {
        return "LCMCalculator: a = " + this.a + ", b = " + this.b;
    }
};

function output(x) {
    document.body.appendChild(document.createTextNode(x));
    document.body.appendChild(document.createElement('br'));
}

[[25, 55], [21, 56], [22, 58], [28, 56]].map(function (pair) { 
    return new LCMCalculator(pair[0], pair[1]);
}.sort((a, b) => a.lcm() - b.lcm()) 
  .forEach(printResult);
function printResult(obj) {
    output(obj + ", gcd = " + obj.gcd() + ", lcm = " + obj.lcm());
}
