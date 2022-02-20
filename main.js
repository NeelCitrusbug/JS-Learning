// //================== String and String methods

// const name = 'neel';
// const age = 22;


// // concatenation
// console.log('My name is ' + name + ' and I am ' + age);

// //Template string
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);


// const s = 'Hello world!';

// // property --> without parenthesis
// // method --> with parenthesis

// // length
// console.log(s.length);

// // convert uppercase
// console.log(s.toUpperCase());

// // convert lowercase
// console.log(s.toLowerCase());

// // substring
// console.log(s.substring(0,5).toUpperCase());

// //split into array
// console.log(s.split(' '));

// //================== String and String methods



// ======================= Arrays - variables that holds multiple values


// Create array using array constructor
const numbers = new Array(1,2,3,4,5);

console.log(numbers);


const fruits = ['apples', 'oranges', 'pears', 10, true];

console.log(fruits);

// accessing items 
console.log(fruits[1]);

//adding item
fruits[3] = 'graps';
console.log(fruits);

// push item at the end 
fruits.push('mangos');
console.log(fruits);

// push item at the start
fruits.unshift('strawberries');
console.log(fruits);

//to remove last item
fruits.pop()
console.log(fruits);

//to check if it's array
console.log(Array.isArray(fruits));
console.log(Array.isArray('hello'));

// get index of item 
console.log(fruits.indexOf('oranges'));

// ======================= Arrays - variables that holds multiple values