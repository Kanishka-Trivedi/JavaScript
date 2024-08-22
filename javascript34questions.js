
//  ---------------------------------------------------------------BEGINNER FRIENDLY QUESTIONS----------------------------------------------------------------------

// 1. **Create a Simple Object**
//    - Task: Create an object representing a person with properties `name`, `age`, and `city`.
var personId =
    { name: "John", age: 25, city: "New York" }


console.log(personId);


//  2. **Access Object Properties**
//    - Task: Write a function that returns the value of a given property from an object.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30 };
//      console.log(getProperty(obj, 'name'));
//      ```
//    - Expected Output: `'Alice'`

const obj = { name: "Alice", age: 30 };
console.log(obj.name);


// 2. **Add Two Numbers**  
//    - Task: Write a function that takes two numbers and returns their sum.  
//    - Test: `sum(3, 5)`  
//    - Expected Output: `8`

function sum(a, b) {
    console.log(a + b)
}
sum(5, 3);


// 3. **Find the Largest Number**  
//    - Task: Write a function that takes three numbers and returns the largest.  
//    - Test: `findLargest(2, 8, 5)`  
//    - Expected Output: `8`


function max(num1, num2, num3) {
    console.log(Math.max(num1, num2, num3));
}

max(12, 45, 14);


// 4. **Check if a Number is Even or Odd**  
//    - Task: Write a function that checks if a number is even or odd.  
//    - Test: `isEven(4)`  
//    - Expected Output: `true`

function isEven(number) {
    if (number % 2 == 0) {
        console.log("is even");
    } else {
        console.log("is odd");
    }
}
isEven(6);


// 5. **Calculate the Factorial of a Number**  
//    - Task: Write a function that returns the factorial of a number.  
//    - Test: `factorial(5)`  
//    - Expected Output: `120`

function factorial(number) {
    let a = 1;
    for (var i = 1; i <= number; i++) {
        a = a * i;
    } console.log(a);
}
factorial(5);


// 6. **Reverse a String**  
//    - Task: Write a function that takes a string and returns it reversed.  
//    - Test: `reverseString('hello')`  
//    - Expected Output: `'olleh'`

function reverse(d) {
    c = d.toString().split('');
    e = c.reverse()
    f = e.join()
    console.log(f)
}
reverse("Hello");


// 7. **Check for Palindrome**  
//    - Task: Write a function that checks if a given string is a palindrome.  
//    - Test: `isPalindrome('madam')`  
//    - Expected Output: `true`

function palindrome(a) {
    b = a.split('').reverse().join('')
    console.log("Original: ", a);
    console.log("Reversed: ", b);
    if (b == a) {
        console.log("True");
    } else {
        console.log("False")
    }
}
palindrome("madam");


// 8. **Find the Minimum Number in an Array**  
//    - Task: Write a function that takes an array and returns the smallest number.  
//    - Test: `findMin([3, 1, 4, 1, 5])`  
//    - Expected Output: `1`

function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin([3, 1, 4, 1, 5]));


// 9. **Sort an Array**  
//    - Task: Write a function that sorts an array of numbers in ascending order.  
//    - Test: `sortArray([3, 1, 4, 1, 5])`  
//    - Expected Output: `[1, 1, 3, 4, 5]`

function sortArray(sort_arr) {
    console.log(sort_arr.sort());
}
sortArray([3, 1, 4, 1, 5]);

// 10. **Check if a String Contains a Substring**  
//     - Task: Write a function that checks if a string contains another substring.  
//     - Test: `containsSubstring('hello world', 'world')`  
//     - Expected Output: `true`

function containsSubstring(string, sub) {
    console.log(string.includes(sub))
}
containsSubstring('Hello World', 'World');


// 11. **Sum All Elements in an Array**  
//     - Task: Write a function that returns the sum of all numbers in an array.  
//     - Test: `sumArray([1, 2, 3, 4, 5])`  
//     - Expected Output: `15`

function sumArray(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    } console.log(sum);
}
sumArray([1, 2, 3, 4, 5]);


// 12. **Generate Fibonacci Sequence**  
//     - Task: Write a function that generates the first `n` Fibonacci numbers.  
//     - Test: `fibonacci(5)`  
//     - Expected Output: `[0, 1, 1, 2, 3]`

// function fibonacci(steps){
//     let one=0;
//     console.log(one);
//      two=1;
//      console.log(two);
//      let three =0;
//      for(var i=1;i<=steps-2;i++){
//         three=one+two;
//         one=two;
//         two=three;
//         console.log(three)
//      }
// }fibonacci(5);


// 13. **Check if a Number is Prime**  
//     - Task: Write a function that checks if a number is prime.  
//     - Test: `isPrime(7)`  
//     - Expected Output: `true`

var count = 0;
function isPrime(number) {
    for (i = 2; i < number; i++) {
        if (number % i == 0) {
            count = count + 1
        }
    }
    if (count > 0) {
        console.log("not a prime");
    } else {
        console.log("prime number")
    }
} isPrime(11);



// 14. **Count the Number of Vowels in a String**  
//     - Task: Write a function that counts the number of vowels in a given string.  
//     - Test: `countVowels('hello')`  
//     - Expected Output: `2`

var count = 0;
function countVowels(string) {
    for (i = 0; i <= string.length; i++) {
        if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
            count = count + 1;
        }
    } console.log(count);
}
countVowels("Hello");


// 15. **Find the Index of an Element in an Array**  
//     - Task: Write a function that returns the index of a given element in an array. If the element is not found, return -1.  
//     - Test: `findIndex([1, 2, 3, 4, 5], 3)`  
//     - Expected Output: `2`

function findIndex(array, element) {
    return array.indexOf(element);
} console.log(findIndex([1, 2, 3, 4, 5], 3));



// 16. **Remove Duplicates from an Array**  
//     - Task: Write a function that removes duplicate elements from an array.  
//     - Test: `removeDuplicates([1, 2, 2, 3, 4, 4, 5])`  
//     - Expected Output: `[1, 2, 3, 4, 5]`

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


// 17. **Find the Intersection of Two Arrays**  
//     - Task: Write a function that returns an array of the common elements in two arrays.  
//     - Test: `findIntersection([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[2, 3]`




// 18. **Check if Two Strings are Anagrams**  
//     - Task: Write a function that checks if two strings are anagrams of each other.  
//     - Test: `areAnagrams('listen', 'silent')`  
//     - Expected Output: `true`

function areAnagrams(str1, str2) {

    function sortString(str) {
        return str.split('').sort().join('');
    }
    if (sortString(str1) == sortString(str2)) {
        console.log("Anagram");
    } else {
        console.log("Not an Anagram");
    }
} areAnagrams('listen', 'silent');


// 19. **Capitalize the First Letter of Each Word**  
//     - Task: Write a function that capitalizes the first letter of each word in a string.  
//     - Test: `capitalizeWords('hello world')`  
//     - Expected Output: `'Hello World'`



// 20. **Flatten a Nested Array**  
//     - Task: Write a function that flattens a nested array (an array of arrays) into a single array.  
//     - Test: `flattenArray([1, [2, 3], [4, [5, 6]]])`  
//     - Expected Output: `[1, 2, 3, 4, 5, 6]`

function flattenArray(array) {
    return array.flat(Infinity)
} console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));



// 24. **Remove a Specific Element from an Array**  
//     - Task: Write a function that removes a specific element from an array.  
//     - Test: `removeElement([1, 2, 3, 4, 5], 3)`  
//     - Expected Output: `[1, 2, 4, 5]`

function removeElement(array) {
    array.splice(2, 1);
    console.log(array);
}
removeElement([1, 2, 3, 4, 5])



// 25. **Find the Second Largest Number in an Array**  
//     - Task: Write a function that returns the second largest number in an array.  
//     - Test: `secondLargest([1, 2, 3, 4, 5])`  
//     - Expected Output: `4`



// 26. **Find the Longest Word in a String**  
//     - Task: Write a function that returns the longest word in a string.  
//     - Test: `longestWord('The quick brown fox jumped over the lazy dog')`  
//     - Expected Output: `'jumped'`

function longestWord(string) {
    // if (string.length === 0) return '';

    const words = string.split(/\s+/);
    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    console.log(longestWord);
}

const sentence = "The quick brown fox jumped over the lazy dog";
longestWord(sentence);



// 27. **Find the Missing Number in an Array**  
//     - Task: Write a function that finds the missing number in a sequence from 1 to n.  
//     - Test: `findMissingNumber([1, 2, 4, 5, 6])`  
//     - Expected Output: `3`

function findMissingNumber(arr) {
    const n = arr.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((acc, sum) => acc + sum, 0);
    return expectedSum - actualSum;
}

const arr = [1, 2, 4, 5, 6];
console.log(findMissingNumber(arr));



// 28. **Calculate the GCD of Two Numbers**  
//     - Task: Write a function that calculates the greatest common divisor (GCD) of two numbers.  
//     - Test: `gcd(12, 18)`  
//     - Expected Output: `6`

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    console.log(a);
}
gcd(12, 18);



// 29. **Calculate the LCM of Two Numbers**  
//     - Task: Write a function that calculates the least common multiple (LCM) of two numbers.  
//     - Test: `lcm(4, 6)`  
//     - Expected Output: `12`


function lcm(a, b) {

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    if (a === 0 || b === 0) return 0;
    return (a * b) / gcd(a, b);
}

console.log(lcm(4, 6));



// 30. **Check for Balanced Parentheses**  
//     - Task: Write a function that checks if a string has balanced parentheses.  
//     - Test: `isBalanced('()')`  
//     - Expected Output: `true`



// 31. **Rotate an Array**  
//     - Task: Write a function that rotates an array by k steps.  
//     - Test: `rotateArray([1, 2, 3, 4, 5], 2)`  
//     - Expected Output: `[4, 5, 1, 2, 3]`

function rotateArray(arr, k) {
    const n = arr.length;

    k = k % n;
    const rotatedArray = arr.slice(-k).concat(arr.slice(0, -k))
    console.log(rotatedArray);
}
rotateArray([1, 2, 3, 4, 5], 2);


// ---------------------------------------------------------------------STRING QUESTIONS-----------------------------------------------------------------------------

// 4. **Find the First Non-Repeated Character in a String**
//    - Task: Write a function that finds the first non-repeated character in a string.
//    - Test:
//      ```javascript
//      console.log(firstNonRepeatedCharacter("swiss"));
//      ```
//    - Expected Output: `"w"`



// 5. **Count the Number of Words in a String**
//    - Task: Write a function that counts the number of words in a string. Assume words are separated by spaces.
//    - Test:
//      ```javascript
//      console.log(countWords("This is a test string"));
//      ```
//    - Expected Output: `5`

function countWords(string) {
    string = string.trim();          // It excludes the empty places before and after the sentence.
    const words = string.split(/\s+/).filter(word => word.length > 0);        // filter removes the extra spaces between the words.

    console.log(words.length);
}

countWords("This is a test string");



// 7. **Replace All Spaces in a String with Hyphens**
//    - Task: Write a function that replaces all spaces in a string with hyphens (`-`).
//    - Test:
//      ```javascript
//      console.log(replaceSpaces("Hello World"));
//      ```
//    - Expected Output: `"Hello-World"`

function replaceSpaces(string) {
    const change = string.replace(/\s+/g, '-');
    console.log(change);
}
replaceSpaces("Hello World")



// 9. **Check if a String Contains Only Digits**
//    - Task: Write a function that checks if a string contains only numeric digits.
//    - Test:
//      ```javascript
//      console.log(isNumeric("12345")); 
//      console.log(isNumeric("123a5"));
//      ```
//    - Expected Output:
//      ```javascript
//      true
//      false

function isNumeric(text) {
    const isDigits = /^\d+$/.test(text);
    if (isDigits) {
        console.log("True");
    } else {
        console.log("False");
    }
}
isNumeric("12345");



// 13. **Repeat a String N Times**
//     - Task: Write a function that repeats a given string `n` times.
//     - Test:
//       ```javascript
//       console.log(repeatString("abc", 3));
//       ```
//     - Expected Output: `"abcabcabc"`

// ---------METHOD1----------------------
// function repeatString(string){
//     let n=3;
//     let newString= string.repeat(n);
//     console.log(newString);
// }
// repeatString("abc");

//-------------------------METHOD 2------------
function repeatString(string) {
    let n = 3;
    let newString = ''
    for (let i = 0; i < n; i++) {
        newString = newString + string;
    } console.log(newString);
}
repeatString("abc");



// 16. **Truncate a String**
//     - Task: Write a function that truncates a string to a specified length and adds "..." at the end.
//     - Test:
//       ```javascript
//       console.log(truncateString("This is a long string", 10));
//       ```
//     - Expected Output: `"This is a..."`

function truncateString(str) {
    newStr = str.split('').slice(0, 10).join('');
    console.log(newStr + "...");
}
truncateString("This is a long string");



// 17. **Check if a String Starts with a Specific Substring**
//     - Task: Write a function that checks if a string starts with a given substring.
//     - Test:
//       ```javascript
//       console.log(startsWith("hello world", "hello"));
//       console.log(startsWith("hello world", "world"));
//       ```
//     - Expected Output:
//       ```javascript
//       true
//       false

function startsWithSubstring(str, sub) {
    const words = str.startsWith(sub);
    console.log(words);
}
startsWithSubstring("hello world", "world");



// 18. **Check if a String Ends with a Specific Substring**
//     - Task: Write a function that checks if a string ends with a given substring.
//     - Test:
//       ```javascript
//       console.log(endsWith("hello world", "world"));
//       console.log(endsWith("hello world", "hello"));
//       ```
//     - Expected Output:
//       ```javascript
//       true
//       false

function endsWithString(str, sub) {
    const words = str.endsWith(sub);
    console.log(words);
}
endsWithString("hello world", "world");



// 20. **Remove All Instances of a Substring**
//     - Task: Write a function that removes all instances of a substring from a string.
//     - Test:
//       ```javascript
//       console.log(removeSubstring("This is a test. This is only a test.", "test"));
//       ```
//     - Expected Output: `"This is a . This is only a ."`

function removeSubstring(string, sub) {
    let words = string.split(/\s+/);  //----------------------------------------------------------------------------
    return [...new Set(words)];
}
console.log(removeSubstring("This is a test. This is only a test.", "test"));


// -------------------------------------------------------------ARRAY QUESTIONS------------------------------------------------------------------

// 13. **Check if an Array is Sorted**  
//     - Task: Write a function that checks if an array is sorted in ascending order.  
//     - Test: `isSorted([1, 2, 3, 4, 5])`  
//     - Expected Output: `true`

function isSorted(arr) {
    newArr = arr.sort();
    if (newArr == arr) {
        console.log("true");
    } else {
        console.log("false");
    }
}
isSorted([1, 2, 3, 4, 5]);



// 14. **Find the Difference of Two Arrays**  
//     - Task: Write a function that returns the difference of two arrays (elements in the first array that are not in the second array).  
//     - Test: `findDifference([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[1]`



// 16. **Find the Maximum Difference Between Two Elements in an Array**  
//     - Task: Write a function that finds the maximum difference between any two elements in an array.  
//     - Test: `maxDifference([2, 3, 10, 6, 4, 8, 1])`  
//     - Expected Output: `8`



// 19. **Find the Pair of Elements with the Minimum Sum in an Array**  
//     - Task: Write a function that finds the pair of elements with the minimum sum in an array.  
//     - Test: `minSumPair([1, 2, 3, 4, 5])`  
//     - Expected Output: `[1, 2]`

function minSumPair(arr) {
    if (arr.length < 2) {
        console.log("Error");
    }
    arr.sort((a, b) => a - b);
    const minSum = arr[0] + arr[1];
    const pair = [arr[0], arr[1]];

    console.log(pair, minSum);
}
minSumPair([1, 2, 3, 4, 5]);



// 20. **Move All Zeros to the End of an Array**  
//     - Task: Write a function that moves all zeros in an array to the end, preserving the order of the other elements.  
//     - Test: `moveZeros([0, 1, 0, 3, 12])`  
//     - Expected Output: `[1, 3, 12, 0, 0]`



// 21. **Count the Frequency of Each Element in an Array**  
//     - Task: Write a function that counts the frequency of each element in an array.  
//     - Test: `countFrequency([1, 2, 2, 3, 3, 3])`  
//     - Expected Output: `{1: 1, 2: 2, 3: 3}`

function countFrequency(arr) {
    const frequencyMap = {}

    for (i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (frequencyMap[element]) {
            frequencyMap[element]++
        } else {
            frequencyMap[element] = 1;
        }
    } console.log(frequencyMap);
}

countFrequency([1, 2, 2, 3, 3, 3]);



// 22. **Find the Most Frequent Element in an Array**  
//     - Task: Write a function that finds the most frequent element in an array.  
//     - Test: `mostFrequent([1, 2, 2, 3, 3, 3])`  
//     - Expected Output: `3`



// 23. **Find the Longest Increasing Subsequence in an Array**  
//     - Task: Write a function that finds the longest increasing subsequence in an array.  
//     - Test: `longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80])`  
//     - Expected Output: `[10, 22, 33, 50, 60, 80]`



// 24. **Find the Longest Consecutive Sequence in an Array**  
//     - Task: Write a function that finds the longest consecutive sequence in an array.  
//     - Test: `longestConsecutive([100, 4, 200, 1, 3, 2])`  
//     - Expected Output: `4` (sequence is `[1, 2, 3, 4]`)

// ----------------------------------------------------------------OBJECT QUESTIONS--------------------------------------------------------------------------------

// 3. **Add a New Property to an Object**
//    - Task: Write a function that adds a new property to an object.
//    - Test:
//      ```javascript
//      const car = { brand: 'Toyota', model: 'Corolla' };
//      addProperty(car, 'year', 2020);
//      console.log(car);
//      ```
//    - Expected Output: `{ brand: 'Toyota', model: 'Corolla', year: 2020 }`

function addProperty(obj, propValue, propName) {
    obj[propValue] = propName;
}

const car = { brand: 'Toyota', model: 'Corolla' };
addProperty(car, 'year', 2020);
console.log(car);



// 4. **Delete a Property from an Object**
//    - Task: Write a function that deletes a property from an object.
//    - Test:
//      ```javascript
//      const user = { username: 'john_doe', password: '12345' };
//      deleteProperty(user, 'password');
//      console.log(user);
//      ```
//    - Expected Output: `{ username: 'john_doe' }`

function deleteProperty(obj, propName) {
    delete obj[propName];
}
const user = { username: 'john_doe', password: '12345' };
deleteProperty(user, 'password');
console.log(user);



// 5. **Check if an Object has a Property**
//    - Task: Write a function that checks if an object has a specific property.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30 };
//      console.log(hasProperty(obj, 'age'));
//      ```
//    - Expected Output: `true`

function hasProperty(obj, propName) {
    return (propName in obj)
}
const userObj = { name: 'Alice', age: 30 };
console.log(hasProperty(userObj, 'name'));



// 6. **Merge Two Objects**
//    - Task: Write a function that merges two objects into one.
//    - Test:
//      ```javascript
//      const obj1 = { a: 1, b: 2 };
//      const obj2 = { b: 3, c: 4 };
//      console.log(mergeObjects(obj1, obj2));
//      ```
//    - Expected Output: `{ a: 1, b: 3, c: 4 }`

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 }
}
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeObjects(obj1, obj2));



// 7. **Clone an Object**
//    - Task: Write a function that creates a deep clone of an object.
//    - Test:
//      ```javascript
//      const original = { name: 'Alice', details: { age: 30, city: 'NYC' } };
//      const clone = cloneObject(original);
//      clone.details.city = 'LA';
//      console.log(original.details.city);
//      console.log(clone.details.city);
//      ```
//    - Expected Output:
//      ```
//      'NYC'
//      'LA'

function cloneObject(original) {
    const clone = Object.assign({ original }, original);
    console.log(clone)
}
const original = { name: 'Alice', details: { age: 30, city: 'NYC' } };
cloneObject(original);



// 8. **Loop Through Object Properties**
//    - Task: Write a function that loops through all the properties of an object and prints them.
//    - Test:
//      ```javascript
//      const user = { name: 'John', age: 30, city: 'New York' };
//      printProperties(user);
//      ```
//    - Expected Output:
//      ```
//      name: John
//      age: 30
//      city: New York

function printProperties(obj) {
    console.log(user1);
}
const user1 = { name: 'John', age: 30, city: 'New York' };
printProperties(obj);



// 9. **Count the Number of Properties in an Object**
//    - Task: Write a function that counts the number of properties in an object.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30, city: 'NYC' };
//      console.log(countProperties(obj));
//      ```
//    - Expected Output: `3`

function countProperties(obj) {
    return Object.keys(obj).length;
}
const obj12 = { name: 'Alice', age: 30, city: 'NYC' };
console.log(countProperties(obj12));



// 10. **Convert Object to Array of Keys**
//     - Task: Write a function that converts an object to an array of its keys.
//     - Test:
//       ```javascript
//       const obj = { name: 'Alice', age: 30, city: 'NYC' };
//       console.log(objectKeysToArray(obj));
//       ```
//     - Expected Output: `['name', 'age', 'city']`

function objectKeysToArray(obj){
   return Object.keys(obj23);
     
}
const obj23 = { name: 'Alice', age: 30, city: 'NYC' };
console.log(objectKeysToArray(obj23)); 



// 11. **Convert Object to Array of Values**
//     - Task: Write a function that converts an object to an array of its values.
//     - Test:
//       ```javascript
//       const obj = { name: 'Alice', age: 30, city: 'NYC' };
//       console.log(objectValuesToArray(obj));
//       ```
//     - Expected Output: `['Alice', 30, 'NYC']`

function objectValuesToArray(obj){
    return Object.values(obj24).map(value => String(value));
}
const obj24 = { name: 'Alice', age: 30, city: 'NYC' };
console.log(objectValuesToArray(obj24));



// 12. **Convert an Array of Objects to a Single Object**
//     - Task: Write a function that converts an array of objects into a single object. Assume each object in the array has a unique `key` property.
//     - Test:
//       ```javascript
//       const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];
//       console.log(arrayToObject(arr));
//       ```
//     - Expected Output: `{ a: 1, b: 2 }`

function arrayToObject(arr){
    return Object.assign({}, arr[i]);
}
console.log(arrayToObject([{ key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 2 }]));
C:\Users\kanis\OneDrive\JavaScript2024\array_notes.js