
// converts an array into a nested object functioning as a list

const arrayToList = (array) => {
	//not using reduce here largely because we have to start from the end of the array
	let list = null
	for (let i = array.length -1; i >= 0; i--){
		list = {value: array[i], rest: list}
	}
	return list;
}

//an array that uses recursion to parse through a list
const listToArray = (list) => {
	const buildArray = (array, {value, rest}) => {
		array.push(value)
		if (rest == null) return array
		return buildArray(array, rest)
	}
	return buildArray([], list)
}

const prepend = (value, list) => {
	return {value: value, rest: list}
}
//it's disgusting that js allows this
const nth = ({value, rest}, count) => count == 0 ? value: nth(rest, count -1)

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
