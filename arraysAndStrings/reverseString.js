const reverseString = (string) => {
	let output = '';
	for (let i = string.length - 1; i >= 0; i--) {
		output += string[i];
	}
	return output;
}

const reverseStringRecursive = (string, output = '', i = string.length - 1) => i === -1 ? output : reverseStringRecursive(string, output += string[i], --i);

console.log(reverseString('hello'));
console.log(reverseStringRecursive('hello'));