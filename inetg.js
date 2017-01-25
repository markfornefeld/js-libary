for (var i = 0; i < 11; i++) {
	if (i == 10) {
		console.log("ten");
	} else if (i == 7) {
		console.log("God's nnumber");
	} else if (i == 6){
		console.log("the beast");
	}	else if (i == 3){
		console.log("the trinity");
	}	else if (i == 4){
	    console.log("the man's number");
	} else if (i == 13){
		console.log("fear not");	
	} 
	else  {	
	    console.log(i);
	}
}
function math(quantity,price,item) {
	var tax=0.07
	var TotalTax=quantity*price*tax
	var TotalPrice=TotalTax+quantity*price
	var Total=quantity*price
	if (item % 2 === 0) {
		return "your product" + TotalPrice + "is taxed"
	} else{
		return "your product" + Total + "is tax free"
	}
	return TotalPrice
}
console.log(math(17.00,5,3))

var time = Date()
console.log(time)

function gender(number) {
	if (number % 2 === 0) {
		return "yo "+ number+ "is even"
	} else{
		return "yo" +number+ " is odd"
	}
}
console.log(gender(34))

var s=0
while (s<=10){
	console.log((s*(s+1))/2)
	s +=1
}

var s=1
while (s>0.1){
	console.log(s)
	s= s/3
}

var evenCount =0
while(evenCount<10){
	if (evenCount %2==0) {
		console.log(evenCount+" is even")
	} else {
		console.log(evenCount+" is odd")
	}
    evenCount++
}

