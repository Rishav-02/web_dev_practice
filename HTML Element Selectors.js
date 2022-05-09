/*className: The className property sets or returns the class name of an element
childNodes: The childNodes property returns a collection of a node's child nodes.
parentNode: The parentNode property returns the parent node of the specified node.
innerText: The innerText property sets or returns the text content of the specified node.
innerHTML: The innerHTML property sets or returns the HTML content of an element.*/

/*
element selectors:
1. Single element selector
2. Multi element selector
*/

// 1. Single element DOM selector
let element = document.getElementById('myfirst');
console.log(element);
let ele1 = element.className;//ele1,2,3 is variable
console.log(ele1);
let ele2 = element.childNodes;
console.log(ele2);
let ele3 = element.parentNode;
console.log(ele3);
element.style.color = 'orange';
element.innerText = 'Rishav is a boy';
console.log(element.innerText);
element.innerHTML = '<b>Rishav is good in Javascript</b>';
console.log(element.innerHTML);

//querySelector will return the first element that matches the specified CSS selector in the document. The querySelector() method only returns the first element that matches the specified selectors.

let sel = document.querySelector('#run');//here id
console.log(sel);
sel = document.querySelector('.child');//here first class given in html
console.log(sel);
sel = document.querySelector('h1');//here tag h1
console.log(sel);
sel = document.querySelector('div');//here first div
sel.style.color = 'red';
console.log(sel);

// 2. Multi element DOM selector
let elems = document.getElementsByClassName('child');
console.log(elems[1]);
elems = document.getElementsByClassName('no').length;
console.log(elems);
elems = document.getElementsByClassName('container');
console.log(elems[0].getElementsByClassName('child'));
elems = document.getElementsByTagName('div');
console.log(elems);
e1 = document.querySelectorAll('.childul');
console.log(e1);

//Here for loop and forEach loop is used to change the HTML content by using element selector both method are same but we use either of them to change

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    sel.style.border = '4px solid green'; //add css
}
Array.from(elems).forEach(element => {
    console.log(element);
   element.style.backgroundColor = 'aqua'; //add css
});