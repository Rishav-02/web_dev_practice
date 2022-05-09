//JavaScript String Methods:-

//charAt(c)
//concat(p1,p2)
//indexOf(substr, [start_from])
//lastIndexOf(substr, [start_from])
//slice(start, [end])
//split(delimiter, limit)
//substring(from, [to])
//toUpperCase()
//toLowerCase()
//search("str")
//substr()

const Name=' Rishav';//space before Rishav
const greet='Nice to meet you ';//space in end
console.log(greet +' '+ Name);  //space in between use on of all three

//Note that: JavaScript counts positions from zero. 0 is the first position in a string, 1 is the second, and so on.
let Script;
Script ='strings are useful for holding data that can be represented in text form.';


Script=Script.concat('Python', ' Program');
console.log(Script);
console.log(Script.length);
console.log(Script.charAt(23));
console.log(Script.indexOf('are'));
console.log(Script.indexOf('not'));//not present then location is -1
console.log(Script.lastIndexOf('can'));//not present then location is -1
console.log(Script.toLowerCase());//small letter
console.log(Script.toUpperCase());  //capital letter
console.log(Script.toLocaleLowerCase());
console.log(Script.toLocaleUpperCase());
console.log(Script[1]);
console.log(Script.slice(0,6,));//0 is start and 6 ke phele tak
console.log(Script.split('h'));//h jaha jaha comma(,) waha waha
console.log(Script.substring(1,10));//1 is start and 10 ke phele tak
console.log(Script.replace('useful', 'use'));//useful replaced by use
console.log(Script.search('data'));

//JavaScript template literals:-
let pro='demanding language in the world.';
let gram='most popular and';
let program=`JAVASCRIPT is ${gram} ${pro}`;
console.log(program); //we can create a tempalte literal by wrapping the string in backticks(``) 

document.body.innerHTML=program;