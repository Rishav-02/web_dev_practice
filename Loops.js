//for(variable in object) {
 //  }

// An object with some properties 
var person = {name: "Rishav", language: "JavaScript", age: 20};
// Loop through all the properties in the object  
for(var i in person) {  
console.log( i + " = " + person[i]); 
}
//ForEach loop
const  alpha = ['a', 'b', 'c'];
for (let i = 0; i < alpha.length; i++) {
console.log(alpha[i]);
}

//General Loops: for, while, do-while
let a =34;
a +=1;//i.e a=a+1//35
a++;//36
console.log(a);
for(let i=0; i<=10;i++){
    console.log(i);
}

let j = 5;
while (j < 12) {
  console.log(j + 1);
  j += 1;
}
//do while loop
//Note: do...while loop is similar to the while loop. The only difference is that in do…while loop, the body of loop is executed at least once.
let k = 0;
do {
    if(k===5){
        k +=1;//k=5 then k=k+1 is 6 then continue execute that skip 6
        continue;
    }
  console.log(k + 1);
  k +=1;
} while (k < 10);


let arr = [2,5,6,4,2,3];
for (let i = 0; i < arr.length; i++) {
     console.log(arr[i]);
}

arr.forEach(function(element, index, array){
    console.log(element, index, array);
});

//Forin loop
let obj = {
    name: "Rishav Raj",
    age: 21,
    type: "Competative Programmer",
    OS: "Ubuntu",
    device:"Laptop", 
}
for(let i in obj){
    console.log(`The ${i} of object is ${obj[i]}`)
}
console.log('done');         
