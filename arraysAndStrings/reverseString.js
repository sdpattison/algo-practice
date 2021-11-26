const reverseString = (string) => {
	let output = '';
	for (let i = string.length - 1; i >= 0; i--) {
		output += string[i];
	}
	return output;
}

const reverseStringRecursive = (string, output = '', i = string.length - 1) => i === -1 ? output : reverseStringRecursive(string, output += string[i], --i);

const reverseStringBuiltIn = (string) => string.split('').reverse().join('');

console.log(reverseString('hello'));
console.log(reverseStringRecursive('hello'));
console.log(reverseStringBuiltIn('hello'));