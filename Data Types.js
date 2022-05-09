//Primitive Data types
// It stores in stack because size is fixed.

//String
let name='Rishav Raj';
console.log("My string is " + name);
console.log("Data type is " + (typeof name));

//Numbers
let marks=34;//3.4 is also number
console.log("Data type is " + (typeof marks));

//Boolean
let goodman=true;
console.log("Data type is " + (typeof goodman));

//Null
let nullVar=null;
console.log("Data type is " + (typeof nullVar));//typeof null is object that is not correct this problem is from the start of Javascript.

//undefined
let undef=undefined;
console.log("Data type is " + (typeof undef));

//Everything is JavaScript is either an Object or Primitive datatype. When we create an object, that value is not directly assigned to the variable. Instead, a reference to that value is what gets set. Variable knows about the location of the object in memory, not the object itself.

// One of the most significant differences between primitive data and reference data is that, If the value is primitive, then we manipulate the actual valuestored in that variable. Whereas, If the value is of reference data type, we can manipulate that object's reference, rather than the actual object. It means a variable that stores an object is accessed by reference.
 

//Non-primitive/Reference Data Types
// It stores in heap because size of the reference value is dynamic

//Arrays
let arr=[1,2,3,4,true,"string"];//array
console.log("Data type is " + (typeof arr));

// Object Literals
let stMarks = {        //stMarks is object
    harry: 89,
    Shubham: 36,
    Rohan: 34
}
console.log( typeof stMarks);

function findName() {
    
}
console.log( typeof findName);

let date = new Date();
console.log( typeof date);
