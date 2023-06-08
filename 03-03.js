
//counts the number of 'B's in a given string using a more generic matching function

const countChar = (string, toMatch) => {
	let count = 0; 
	for(let i = 0; i < string.length; i++){
		if(string[i] == toMatch){
			count ++
		}
	}
	return count;
}

const countBs = (string) => countChar(string, 'B')

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
