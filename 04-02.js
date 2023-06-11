
// reverse a given array

const reverseArray = (array) => {
	let newArray = []
	for(let arg of array) {
		newArray.unshift(arg)
	}
	return newArray
}

const reverseArrayInPlace = (array) => {
	//I spent so long trying to find a pop push combo that lets you not make a temporary array
	//so what's cool here is you can put all the start up code you want to run once in the for declaration 	
	for(let hold, i = 0, max = Math.floor(array.length/2); i < max; i++){
		let swap = array.length - (i+1)
		hold = array[i]
		array[i] = array[swap]
		array[swap] = hold
		
	}
}


//testing below
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
