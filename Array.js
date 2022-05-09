//Arrays are the objects in which we can store multiple values in a single variable.

//Method() of array

//Length of an Array:- The property length sets or returns the number of elements in an array.
let num = [33,55,67,18];
console.log(num.length);

//indexOf():- This method Search the array for an element and returns its position
let std = ["Mark", "John", "Jonas", "Jack"];
let a = std.indexOf("John");
console.log(a);

// sort(): This method is used to sort the elements of an array
let age = [33,55,67,18];
// let s_age= age.sort(18,67);//18,33,55,67
// console.log(s_age);

//reverse(): This method is used to reverses the element of an array. The first array element becomes the last and the last becomes the first.
let number = [33,55,67,18];
let r_number= number.reverse(number);//18,67,55,33
console.log(r_number);

//concat(): This method will returns a new array comprised of this array joined with an other array or value
let alpha = ["a", "b", "c"];
let numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric); // a,b,c,1,2,3
console.log(alphaNumeric);

//Here are some methods which are used to modify an array. Remember that, when we modify an array, we are modifying the original array.

//push(): This method is used to add an item to the end of an Array
let fruits = ["Banana", "Orange", "Apple"];
let len = fruits.push('Mango');
console.log(fruits);
console.log(len);

//pop():- This method is used to remove an item from the end of an Array
let last = fruits.pop() // remove Mango (from the end)
//["Banana","Orange", "Apple"]
console.log(last);

 //shift():- This method is used to remove an item from the beginning of an Array
let first = fruits.shift() // remove Banana from the front
// ["Orange" , "Apple"]
console.log(first);

//unshift():- This method is used to add an item to the beginning of an Array
let newLength = fruits.unshift('Strawberry') // add to the front// ["Strawberry","Orange", "Apple"]
console.log(newLength);
console.log(fruits);

//splice(): This method is used to remove an item by index position
let removedItem = fruits.splice(0,1) // this is how to remove an item
// ["Strawberry","Orange","Apple"]
console.log(removedItem);


//Javascript Object:-
//In JavaScript, Object is a non-primitive data type. The object is like other variables, but the only difference is that an object holds multiple values, arrays, functions etc.

//The syntax for accessing the property of an object is:
//objectName.property
//objectName['propertyName'];


let user = new Object(); // "object constructor" syntax
let _user = {}; // "object literal" syntax

let user1 = { 
    name: "Rishav Sinha", // by key "name" store value "Rishav Sinha"
    age: 21, // by key "age" store value 21
    language: "JavaScript" ,// by key "language" store value “ JavaScript”
    hobby:'study and playing',
    course:'BCA'
  };

console.log(user1);
console.log(user1.age);//access by dot
console.log(user1["hobby"]);//access by bracket[' '] 
console.log(user1.course);
console.log(user1['language']);
