//function is a group of reusable code which can be called anywhere in the program. This eliminates the need to rewrite the same code. Functions allow a programmer to divide a big program into a smaller and manageable function.

//A Function Declaration defines a named function. To create a function declaration, use the function keyword, and then write the function's name. When using function declarations, the function definition is hoisted. Thus the function is allowed to be used before it is defined. 
function name(parameters){
    //statements
  }

function print_message(message) {
    console.log(message);
    }
    print_message("Hello World"); //function call trigger   //Output: Hello World

//A Function Expressions defines a named or anonymous function. An anonymous function is a function that does not have any name. Function Expressions are not hoisted, and therefore we cannot call them before they are defined.
let variable_name = function(parameters){
    // statements
   }

let add=function(a,b) {
    return a + b;
}
console.log(add(4,3)); //Output: 7

//we have learned that the function is a subprogram designed to perform a particular task. Functions are executed when they are called. This is known as invoking a function. Arguments can be passed into functions and used within the function. Functions always return a value. In JavaScript, if no return value is specified, the function will return undefined.


if(1){
    let i =234;
    console.log(i)
}

function country(name)
{
    let i = 9;
    console.log(i);
    return `${name} is a country with various cultural diversity.`;
}
console.log(country("India"));//country function call here

const mygreet = function(Name, thank='Thank You'){
    let msg = `Happy Birthday ${Name}.I am ${Name2} I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;
    return msg;

}

let Name = 'Rishav';
let Name2 ='Alok';

let val = mygreet(Name, 'Thanks a lot');//mygreet() function call here with arguments Name and 
console.log(val);


const myobj = {
    name: "Shyam",
    game: function(){
        return "FREEFIRE";
    }
}
console.log(myobj.name);
console.log(myobj.game());

arr = ['fruits', 'vegetable', "Milk product"];
arr.forEach(function(element, index, array) {
    console.log(element, index)
});         
