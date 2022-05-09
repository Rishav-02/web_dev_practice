// var is use before when let and const not come in category of variables i.e in ES6 2015.Use let and const more as compare to var.

// In var- we can change the value and its redeclared in the same scope.var is globally scoped and when they are define inside a function,they are locally scoped.
var Name='rishav';
var channel; //if channel is not initialize then the value is undefined.
var marks= 90;
// channel="Code";
console.log(Name,channel,marks);

var city='Deoghar'; //global variable
console.log(city);

// const is a variable type assigned to data whose value    cannot and will not be changed throughout the program.Const is more strict as compared to var and let. We use const when we are sure a variable will not be redeclared. The characteristic of const and their declarations are block-scoped, and they cannot be updated or redeclared.

const firstName="Rishav";
// firstName="Ram"; // Can't do this(error)
console.log(firstName);

const arr2=[12,23,56,89,9];
arr2.push(34);//push() element in array
console.log(arr2);

// let shares a lot of similarities with var, but unlike var, it has scope constraints. Its declaration and assignment are similar to var.The properties of let are that They have visibility linked to the block they belong with. We can change their values, but they cannot be redeclared in the same scope, unlike var."let" helps us by making it easier to see where variables live in our code and make our code cleaner and easier to read.

{
    let city="Kolkata"; //local variable
    city='Hyderabad';
    console.log(city);
}
console.log(city);// if let not use then here global variable overwrite

