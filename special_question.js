let arr = [3,5,4,7,89,45];

function arrlength (arr){

const min =Math.min(...arr);
const max= Math.max(...arr);

for(i=min; i<max; i++){
    let count =0;
    count=count+1;
    if(arr[i]!==0 ) {
       
    }
}

}


var my_name ="Kanishka";
var my_age=17;
console.log(`My name is ${my_name} and my age is ${my_age}`)
console.log("My name is "+my_name+" and my age is "+my_age)





// -----------------------------------------------------------------------DESTRUCTURING-------------------------------------------------------------------------------


// let new_array= [1,2,3,4,5,6]
// let [one,two,three]=[1,2,3]
// console.log(two);


let obj = {one: 1,two: 2,three: 3};
let {one, two, three} = obj;
console.log(one)

const uniqueNumbers = new Set();
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(1);
uniqueNumbers.add({key:"value"});
uniqueNumbers.add({key:"diff_value"});
uniqueNumbers.add(function myName() {});
uniqueNumbers.add("5");
uniqueNumbers.add("5");

console.log("Set:Unique Numbers-",Array.from(uniqueNumbers).join(","));