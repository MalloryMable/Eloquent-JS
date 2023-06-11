
// range implementation

const range = (start, end, step = 1) => {
	let rangeArr = []
	const condition = step > 0 ? (a, b) => a <= b : (a, b) => a >= b 
	for(; condition(start,end); start += step){
		rangeArr.push(start)
	}
	return rangeArr
}

console.log(range(1,10))
console.log(range(5,2,-1))
