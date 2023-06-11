
// flattens a muti dimensional array into a single array

const flatten = (array) => 
	array.reduce((flat, localArray)=>
		flat.concat(localArray))


let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays))
