// let arr = [1, 3, 2, 4, 5, 8, 7]

//1.> Find the length of the array without using inbuilt function.
//let length = 0;
//for (i = 0; arr[i] != undefined; i++) {
//    length = length + 1;
//}
//console.log(length);

// 2.> Find the missing element in the array .

// for(i=1; i<=8; i++){
//     if(arr.includes(i)){}
//     else{
//         console.log(i);
//     }
// }

//METHOD2

// let arrS = arr.sort((a,b) => a-b);
// let n = arr.length +1;
// let missingNumber;

// for(i=0; i<arr.length; i++){
//     if(arr[i]!==i+1){
//         missingNumber = i + 1;
//         break;
//     }
// }
// console.log(arrS);
// console.log(missingNumber);

// 3.> Sort the above array without using .sort function 
// let temp = 0;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//         temp = arr[i + 1]
//         arr[i + 1] = arr[i]
//         arr[i] = temp
//     }
// }
// console.log(arr)

// 4.> Sort the given array.
// let arra = [0,0,1,0,1,0,1];
// let temp = 0;
// for(i=0; i<arr.length; i++){
//     if(arra[i]>=arra[i+(i-1)]){
//         temp = arra[i+(i-1)]
//         arra[i+(i-1)]=arra[i]
//         arra[i]=temp
//     }
// }console.log(arra);

//  METHOD 2
// var count = 0;
// for(i=0; i<=arra.length; i++){
//     if(arra[i]==0){
//         count++;
//     }
// }console.log(count);
// var arra1= [];
// for(k=0; k<count; k++){
//     arr1.push(0);
// }

// for(j=0; j<arr.length-count; j++){
//     arra1.push(1);
// }console.log(arra1);


// 5.> Sort the array.
// let arr = [0,0,2,1,1,2,0,0];

// var count =0;
// let arr =[0,0,1,0,1,0,1];
// var count = 0;
// for(i=0;i<arr.length;i++){
// if(arr[i]==0){
//     count++
// }
// }
// console.log(count)

// var arr1=[];
// for(k=0;k<count;k++){
//     arr1.push(0)
// }

// for(j=0; j<arr.length-count;j++)
// {arr1.push(1)}

// console.log(arr1)



// 6.> An array is given then print another array in which an element is equal to sum of previous two elements.
// function change (arr){
//     let arr = [1,2,3,4,5,6];
//     if(arr.length<2){
//         console.log("There should be minimum 2 elements in the array.");
//     }
//     let resultArr = [arr[0], arr[1]];
//     for(let i=2; i <=arr.length; i++){
//         let nextElement  = resultArr[i-1]+ resultArr[i-2];
//         resultArr.push(nextElement);
//     }
//     console.log(resultArr);
// }
// change(arr);


//7.> A string is given then write a code in such a way that the letters at the even places gets into the upper case and the odd ones stay as it is.
// function upper(str){
//     if(str.length ===0){
//         return;
//     }
//     let result = '';
//     for(i=0; i<str.length; i++){
//     if(i%2===0){
//         result = result+str[i].toUpperCase();
//     }else{
//         result=result+str[i];
//     }
// }
// console.log(result);
// }
// upper("empty string");
