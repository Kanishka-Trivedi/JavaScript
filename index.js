for(i=0;i<=100;i=i+2){
    console.log(i);
}

var new_obj = {key:"value"}
console.log(new_obj);

var new_array =[1,2,3,4,5]
console.log(new_array)

function for_loop(){
    for(i=0;i<=10;i++){
        console.log(i);
    }
}

for_loop();



//---------------------------------------------------------------------------QUESTIONS-----------------------------------------------------------------------------------

// METHOD 1
// let number = '132';
// x = 0;
// for(i=0; number[i]!=undefined; i++){
//     x+=(number[i]**number.length)
// }

// if(x==number){
//     console.log("True");
// }else{
//     console.log("False");
// }

// METHOD 2
let number = 1634;
x=0;
let y = number.toString().split('')
for(i=0; number[i]!=undefined;i++){
    a+=(number[i]**number.length)
}

if(x==number){
    console.log("True");
}else{
    console.log("False");
}

// SWAPPING TWO NUMBERS
// For two variables.
var a=1;
var b=3;

a=a+b;
b=a-b;
a=a-b;
console.log("a", "b",a,b);

// For three variables
let a1=4;
let b1=8;
let c1=12;

// [a1,b1,c1]=[b1,c1,a1];
// console.log(a1,b1,c1);

a1=a1+b1;
b1=c1-b1;
c1=c1-b1;

console.log(a1,b1,c1);

// Find the sum of the digits in a number.
// var num=123;

// var sum=0;
// while(num>0){
//     sum=sum + num%10;
//     num=(num-(num%10))/10
// }

// console.log(sum);

var num=153;

var sum=0;
var pow =num.toString().length;
while(num>0){
    var rem=num%10;
    sum=sum +(rem**pow);
    num=(num-rem)/10
}

console.log(sum);



// let str = "this is a test";
// let newstr = '';

// for(i=(str.length)-1; i >=0;i--){
//     newstr += str[i];
//   } 
//   console.log(newstr);



function findmissingnumbers (arr){
    if(arr.length===0){
        return [];
    } 
    
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    const missingnumbers=[];
    
    
for(let i=min; i<=max;i++){
    if(!arr.includes(i)){
        missingnumbers.push(i);
    }
} console.log(missingnumbers);
}



console.log(findmissingnumbers([1,2,4,5,6,8]));