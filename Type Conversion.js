//JavaScript is a programming language used to build dynamic web pages. In this language, we do not have to specify the data type when we declare it. We can assign new data of a different type to the same variable. 

//Typecasting/Type conversion and coercion in simple terms means changing the data type of a value to another data type like an integer to string, Boolean into String, etc.
let res;

res=Boolean(1); // true
res= Boolean(0); // false
res= Boolean("hello"); // true
console.log(res);
res= Boolean(""); // false

let a=90;
res=String(a);
console.log(res);

res = '5' - true;
console.log(res); // 4
res = 10 + false;
console.log(res); // 10
res= 6 - undefined;
console.log(res);


// Type conversion 
let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));

let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
console.log(date, (typeof date));

let arr =  String([1,2,3,4,5,6]);
console.log(arr.length, (typeof arr));

let i = 75;
console.log(i.toString());

let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
console.log(stri, (typeof stri));

console.log( parseInt('$100 dollars') ); // NaN
console.log( parseInt('+10.25990 kg') ); // 10
console.log( parseFloat(' +10.25 kg') ); // 10.25
console.log( parseFloat('ABC') );        //NaN 

let number = parseFloat('34.098');
console.log(number.toFixed(2), (typeof number));

// Type coercion


//Number() method in case of empty strings and null values return 0. If a string is an invalid number like having an alphabet in a string, the result will be NaN. 

let mystr = Number("698");//Number() is a function to convert numeric strings to numbers
let mynum = 34;
console.log(mystr + mynum);

let str = "698";
let num = 34;

console.log(str + num);

