
//a way of checking if every member of an array satisfies a condition

const every = (array, funct) => {
	let condition = true 
	array.forEach(n =>{if(!funct(n)) condition = false})
	return condition
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
