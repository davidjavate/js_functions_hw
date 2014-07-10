//Function problems
//Merge

var arr1 = [3,6,11];
var arr2 = [2,4,5,8.9];

var merge = function(arrOne, arrTwo) {
	var indexOne = 0;
	var indexTwo = 0;
	var output = [];

	while(indexOne<arrOne.length && indexTwo < arrTwo.length) {

		if (arrOne[indexOne]< arrTwo[indexTwo]) {
			output.push(arrOne[indexOne]);
			indexOne++;
		}
		else {
			output.push(arrTwo[indexTwo]);
			indexTwo++
		}
	}

		if(indexOne < arrOne.length) {
		for (var i = indexOne; i < arrOne.length; i++){
			output.push(arrOne[indexOne]);
		}
		}
		else{
			for (var i = indexTwo; i<arrTwo.length; i++) {
			output.push(arrTwo[indexTwo]);
			}
		}
		return output;
}

console.log(merge(arr1,arr2));

// //Word Length exercise
var word = "sassafrass"
var myObj = {};
var count = 0;


for (var i=0; i<word.length; i++) {

		for(var v=0; v<word.length; v++){
			if (word[i] === word[v]) {
				count++;
				myObj[word[i]] = count;
			}
		}
		count = 0;
}
console.log(myObj);

//sillySum


var sillyArr = []
var sillySum = function(numbers) {
	for(i=0; i<=numbers.length ; i++){
	var sum = numbers[i] + (numbers[i]*i)
	sillyArr.push(sum);
};
};

console.log(sillySum([5,4,3,2,1]);
}


//numSquare(max)

var numSquare = function(number) {
	var perfArr =[];
	for(i=0; i<number.length; i++) {
		var number2 = number[i]*number[i];
		perfArr.push(number2)
	}
	return perfArr;
}
console.log(numSquare([5,4,3,2,1]));


//prime number

var primeNumber = function(number) {
	for (i=2;i<number ;i++ ){
	if (number%i === 0) {
		return false
	}else {
		return true;

	}
}
}

console.log(primeNumber(17));
console.log(primeNumber(4))
console.log(primeNumber(101))

//Primesmax

var primesMax = [];

var primeNumber = function(number) {
	for (i=2;i<number ;i++ ){
	if (number%i === 0) {
		}else {
		primesMax.push(i);
	}
}
	return primesMax
}


//console.log(primeNumber(17));
//console.log(primeNumber(4));
console.log(primeNumber(101));
