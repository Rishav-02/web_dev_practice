//Problem statement:-
/*You have to create a variable, which takes a string that contains the text, which is a link you are interested in. 

Your task is to fetch all the links from a given page which contains this text.

For example, you have to fetch the link which contains JavaScript word or text that looks like www.google.com and www.w3school.com. You have to fetch all the links, filter them and then display the links you are interested in on the screen.*/

let string = "I have a access of google and W3school website.";
let a = document.links;
console.log(a);
let href;
Array.from(a).forEach(function(element) {
    href = element.href;
    // if(href.includes(string)){
        
console.log(href);
//  }
});