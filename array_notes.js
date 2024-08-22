// What is an array?

let array = [1,2,"three",4.5];
console.log(array);

// const cars = new Array("Saab", "Volvo", "BMW");
// console.log(cars);

// Here we changes the element of an array manually.
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
console.log(cars);

// To convert array to string we use[toString()].
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const change= fruits.toString("");
// console.log(change);

// To access any Element an array we use-
const person = ["John", "Doe", 46];
console.log(person[1]);

// --------------------------------------------------------------------------------OBJECTS------------------------------------------------------------------------------------

var obj = {firstName:"John", lastName:"Doe", age:46};
console.log(obj.age);

// To find the length of an array or to sort the array we use-
cars.length   // Returns the number of elements
cars.sort()   // Sorts the array

// To find the type of the element inside the array.
// const fruits = ["pear", "strawberry", "avacado"];
// console.log(typeof(fruits));

// Nested Arrays------
const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
  console.log(myObj.name);
  console.log(myObj.cars[0].models[2]);

  // To join the elements in an array we use-
  // const fruits = ["Banana", "Orange", "Apple", "Mango"];
  // const newfruits = fruits.join("*");
  // console.log(newfruits);

  // ------------------------------------------------------------------------------ARRAY METHODS---------------------------------------------------------------------------

  // POP METHOD------
  // This method removes the last Element from an array.
  // const fruits = ["Banana", "Orange", "Apple", "Mango"];
  //  fruits.pop();
  //  console.log(fruits);

    //  PUSH METHOD------
    // This method adds an eliment in the last of the array.
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.push("Kiwi");
    // console.log(fruits);

    //  SHIFT METHOD-----
    // The shift() method removes the first array element and "shifts" all other elements to a lower index.
    // The same goes with unshift but it unshifts the shifted objects and adds it.

    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.shift();
    // console.log(fruits);

    // CONCAT METHOD-----
    // The concat() method creates a new array by merging (concatenating) existing arrays:
    // const arr1 = ["Cecilie", "Lone"];
    // const arr2 = ["Robin", "Morgan"];
    // const arr3 = ["Emil", "Tobias", "Linus"];
    // const myChildren = arr1.concat(arr2, arr3);

    // console.log(myChildren);

    const arr1 = ["Emil", "Tobias", "Linus"];
    const myChildren = arr1.concat("Peter");
    console.log(myChildren);

    // copyWithin METHOD-----
    // The copyWithin() method copies array elements to another position in an array:
    const myBoys = ["Emil", "Tobias", "Linus"];
    myBoys.copyWithin(1,0);
    console.log(myBoys);

    // SPLICE AND SLICE METHOD-----
    // The splice() method adds new items to an array.
    // The slice() method slices out a piece of an array.
    // The syntax of splice methid is :
    
    // var anyName =["","","","",""];
    // anyName.splice(start,deletecount,any variable we want to insert);
    // console.log(anyName);

    // Using splice to add new items in an array.
    // const fruits =["Banana","Kiwi","Orange","Apple"];
    // fruits.splice(2,0,"Strawberry");
    // console.log(fruits);


    // Using splice to replace new items in an array.
    // const fruits =["Banana","Kiwi","Orange","Apple"];
    // fruits.splice(2,2,"Melon","Lichi");
    // console.log(fruits);


    // Using splice to remove some elements from an array.
    // const fruits =["Banana","Kiwi","Orange","Apple"];
    // fruits.splice(1,1);
    // console.log(fruits);


    // indexOf METHOD-----

    // This method is used to find the index of any element in an array from starting.
    // const fruits =["Apple","Orange","Apple","Kiwi","Lichi"];
    // console.log(fruits.indexOf("Apple")+1);

    //  This method is used to find the index of any element in an array from the end.
      // const fruits =["Apple","Orange","Apple","Kiwi","Lichi"];
      // console.log(fruits.lastIndexOf("Apple")+1);


      // .include METHOD-----

      // This method is used to find if a given element is in the array or not.
      // const fruits =["Apple","Orange","Apple","Kiwi","Lichi"];
      // const change= fruits.includes("Orange");
      // console.log(change);


      // .find METHOD-----
      // This method is used to find any perticular element in an array.

      // To find the any value of an array.
      // const numbers = [1,2,45,36,23,12,14,16,47];
      // let first = numbers.find(x => x > 40);
 
      // console.log(first);

      // To find any index of any value in the array we use.
      const numbers = [1,2,45,36,23,12,14,16,47];
      let first = numbers.findIndex(x => x > 30);

      console.log(first);

      // .findLast METHOD-----
      
      // To find any element of an array from last.
      // const temp = [27, 28, 30, 40, 42, 35, 30];
      // let pos = temp.findLastIndex(x => x > 40);

      // console.log(pos);

      //  To find index of any element in an array from last.
      const temp = [27, 28, 30, 40, 42, 35, 30];
      let pos = temp.findLastIndex(x => x > 40);

      console.log(pos);

      // .sort METHOD-----
      // This method sorts out all the elements of an array in alphabetic order.


      // .reverse METHOD-----
      // const fruits = ["Banana", "Orange", "Apple", "Mango"];
      // fruits.reverse();

      // console.log(fruits);

      // To get the elements in descending order we use both "reverse" and "sort" together.
      const fruits = ["Banana", "Orange", "Apple", "Mango"];
      fruits.sort();
      fruits.reverse();

      console.log(fruits);

      
      // .sort METHOD FOR NUMBERS-----
       const points= [40, 100, 1, 5, 25, 10];
       points.sort(function(a,b){return(a-b)});


      


      //  const words=string.split(/\s+/);  it is used to split the words and not the letters.
      // string.replace(pattern, replacement);  it replaces the spaces to any pattern.
      // const isDigits = /^\d+$/.test(text); it checks weather the given text has only numbers or not.
      // const words = str.startsWith(sub);  it is used to find if a given string starts with a substring.
