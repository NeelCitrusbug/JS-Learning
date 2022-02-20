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


// // Create array using array constructor
// const numbers = new Array(1,2,3,4,5);

// console.log(numbers);


// const fruits = ['apples', 'oranges', 'pears', 10, true];

// console.log(fruits);

// // accessing items 
// console.log(fruits[1]);

// //adding item
// fruits[3] = 'graps';
// console.log(fruits);

// // push item at the end 
// fruits.push('mangos');
// console.log(fruits);

// // push item at the start
// fruits.unshift('strawberries');
// console.log(fruits);

// //to remove last item
// fruits.pop()
// console.log(fruits);

// //to check if it's array
// console.log(Array.isArray(fruits));
// console.log(Array.isArray('hello'));

// // get index of item 
// console.log(fruits.indexOf('oranges'));

// ======================= Arrays - variables that holds multiple values


// =================== Arrays of objecs and JSON 


const todos = [
    {
        id:1,
        text:'Take out the trash',
        isCompleted: true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text:'Dentist appointment',
        isCompleted: false
    }
];


console.log(todos[1].text);


const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//for loops
for(let i=0; i<10; i++){
    console.log(`For loop number : ${i}`);
}

// while 
let i=0;
while(i<10){
    console.log(`While loop number : ${i}`);
    i++;
}

// loop through array 

for(let i=0; i<todos.length; i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo.text);
}

// =================== Arrays of objecs and JSON 