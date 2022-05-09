//conditional statements are used to decide the execution flow, based on different conditions. When the condition is true, specific action is performed, and if the condition is false, another action will perform. In JavaScript, we have the if, if-else, else if and switch statement.

//We express a condition for if statements using relational operators. The relational operators allow us to compare two values to see whether they are equal, unequal, greater than, or less.

//a===b means: a has the same value and same type as b

const age = 88;
const doesDrive = false;
const vari = 34;//number type

if (age!=19){
    console.log('Age is not 19')
}

if(age !== 65){
    console.log('Age is not 65')
}

else{
    console.log('Age is not 19')
}

if (typeof vari !== 'undefined'){ //number!==undefine. true
    console.log('vari is defined');//line executed
}

else{
    console.log('vari is not defined');
}

if (doesDrive || age>18){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}

console.log(age==45? 'Age is 45': 'Age is not 45');

console.log(age===88);

switch (age) {
    case 18:
        console.log("You are 18");
        break;//if we not write break then below case will run .

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;
}         
