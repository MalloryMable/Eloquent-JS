
//a recusive way of evaluating if a number is odd or even

const isEven = (num) => 
	(num >= 0) ? 
		(num == 0 || num == 1) ? 
			num == 0
			: isEven(num - 2)
	: null

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
