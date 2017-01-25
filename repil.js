var f = [ -11,-7,-17,77];
var y = true;
if  (y === true)
console.log(sum (f));
function sum( f){
    var total=0;
    for( var i=0; i<f.length;++i){
      total+=f[i] ; 
    }return total;
}

var x = 4;
var y = 6;
function addstuff (x,y) {
    return x+y;
}
var result = (x+y);
console.log (result);

var nofs=0;
while(nofs <=10 )  {
    console.log(nofs);
    nofs++;
} 

var person = {
    name: "Mark",
    age: 30,
};
console.log(person);

function dayOfTheWeek(value) {
    var dayOfTheWeek = "Friday";
    var howYouAreFeeling = "Great because it is Friday.";
   
    if (value == 5) {
        console.log(howYouAreFeeling);
    }   else if (value > 5) {
    console.log ("It is Saturday or Sunday.");
    }   else   {
        console.log ("It is not Friday, Saturday, or Sunday.");
    }
    return (value);
}
dayOfTheWeek(5);

  var brother = {
  name: "Mark",
  age: 47,
  livesInNoblesville: false,
  Zip: 55555,
  
  howAreYouDoing: function () {
      console.log("Tell Me About It?");
  },
  
  giveMeYourNumber: function (x, y) {
      console.log(x + y);
  }
};
brother.howAreYouDoing ();
brother.giveMeYourNumber (3, 6);

for (var i = 0; i < 11; i++) {
	//console.log(i);
	if (i == 10) {
		console.log("ten");
	} else if (i == 7) {
		console.log("God's nnumber");
	} else if (i == 6){
		console.log("the beast");
	}  else  {	
	    console.log(i);
	}
}
