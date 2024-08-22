let a= '"Hello Computer"';
console.log(a);

// Print your name and your location.
let name = "Kanishka";
let address = "Ahemdabad";

console.log(name);
console.log(address);

// Find the area of circle.
let radius = 3;
const pi = 3.14;
console.log("Area of circle is "+(pi*radius**2));

// Write a program to print the multiply,addition,division and substraction value of two accepted numbers.
let num1 = 4;
let num2 = 6;

console.log("Addition of num1 and num2 is "+(num1+num2));
console.log("Multiplication of num1 and num2 is "+(num1*num2));
console.log("Division of num2 and num1 is "+(num2/num1));
console.log("Substraction of num1 from num2 is "+(num2-num1));

// Write a program to swap a variable of no1 and no2.

let no1 =3 ;
let no2 =6 ;

[no1,no2] = [no2,no1];

console.log(no1,no2);

// Write a program to find the maximum of two number.

// let b=0;
// let c=-5;

// if(b>c){
//     console.log("b is greatest");
// }else if (c>b){
//     console.log("c is greatest")
// }else{
//     console.log("both are equal")
// }

// Write a program to find the minimum of two numbers.

let b=0;
let c=-5;

if(b<c){
    console.log("b is minimum");
}else if (c<b){
    console.log("c is minimum")
}else{
    console.log("both are equal")
}

// Write a program to find the maximum of given three numbers.


// Write a program to find the minimum of the three numbers.

let x = 7;
let y = 8;
let z = 7;

if(x<y && x<z){
    console.log("x is the smallest");
}else if(y<x && y<z){
    console.log("y is the smallest");
}else if(z<x && z<y){
    console.log("z is the smallest");
}else if(x==y && x<z){
    console.log("x and y are the smallest");
}else if(y==z && y<x){
    console.log("y and z are the smallest");
}else if(x==z && x<y){
    console.log("x and z are the smallest");
}else{
    console.log("all are equal");
}

// Write a multiplication table from 1 to 12.

for(let i=1;i<=12;i++){
    console.log("5","*",i,"=",5*i);
}

// Write a program to check if a given number is prime or not.

var num = 3;
var count = 0;
for(var i=2; i<num;i++){
    if(num%i==0){
        count=count+1
    }
}

if(count>0){
    console.log("not a prime");
}else{
    console.log("prime number");
}

// Write a program to find addition of 45 to 65 using loop.
const part1 = 45;
const part2 = 65;

let result = part1;

for(let i=0; i<part2;i++){
    result++
}
console.log(result);

// Write a javascript program to print the following shape. * * * * * * * * * *

var shape = "* * * * * * * * * *";

console.log(shape);

// Write javascript program to print range of 101 to 130 using array.

const numberArray =[];
for(let i=101; i<=130; i++){
    numberArray.push(i);
}

console.log(numberArray);

// Write a javascript program to find the length of the given string.

var stringLength = "Kanishka";
console.log(stringLength.length);

// Write a javascript program to print the 3x3 array.

const threeArray =[4,5,6,
                   7,9,10,
                   12,15,18
                  ];
console.log(threeArray);

// Write a javascript program to concate (merge) the two strings.

let strng1 = "Hello ";
let strng2 = "World";

let strngCombined = strng1.concat(strng2);
console.log(strngCombined);



