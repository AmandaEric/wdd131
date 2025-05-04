// constanct
const PI = 3.14;
// variable
let radius = 3;
// area can be without a value because it is going to change with the radius
let area = 0;
 
area = radius * radius * PI

console.log(area);


// Example of undefined pi because it is lowercase and not PI
// Inspect the page and go to consle and it will show the error and what line it is on
// radius = 20;

// area = radius * radius * pi

// console.log(area)

// type coersion
// Example of javascript not caring what a string or a nuber is
const one = 1;
const two = '2';

let result = one * two;
console.log(result) ;

// it is just puting the two umbers together because the two is a string
result = one + two;
console.log(result) ;

result = one + Number(two);
console.log(result) ;

// scope 
let global = "I'm global";

function exampleFunction() {
    let block = "I am black level or local";
    console.log(block);
    console.log(global);
}
// console.log(block);
console.log(global);
exampleFunction();

global = "I am also global";
console.log(global);