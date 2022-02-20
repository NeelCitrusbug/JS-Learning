// String and String methods

const name = 'neel';
const age = 22;


// concatenation
console.log('My name is ' + name + ' and I am ' + age);

//Template string
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);


const s = 'Hello world!';

// property --> without parenthesis
// method --> with parenthesis

// length
console.log(s.length);

// convert uppercase
console.log(s.toUpperCase());

// convert lowercase
console.log(s.toLowerCase());

// substring
console.log(s.substring(0,5).toUpperCase());

//split into array
console.log(s.split(' '));