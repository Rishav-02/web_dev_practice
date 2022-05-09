//We can traverse the DOM in three directions, downwards, upwards and sideways. Each type of traversal uses a different method.

/*Traversing downwards:-
There are two methods to traverse downwards, the first one is querySelector and the second one is children.*/
/* querySelector or querySelectorAll:-
To traverse downwards from a specific element, we can use querySelector( ) or querySelectorAll( ). The querySelector() returns the first element within the document that matches the specified selector whereas the querySelectorAll() returns the NodeList representing a list of the document's elements that match the specified group of selectors.*/

/*<div class="add"> 
{ <h2 class="add__title">title</h2> }
// </div>
const component = document.querySelector('.add')
console.log(component)*/

/*children:-
The property that lets you select direct descendants is called children . It selects elements that are immediately nested in another element. The children returns a HTML Collection that updates when children elements are changed.*/
/*const items= document.querySelector('.myclass')
const l_Items = items.children
console.log(l_Items)*/


/*Selecting a specific child:-
While traversing the DOM, we can select the nth-item in the list from both NodeLists and HTML Collections. For this, we use the index of the element. Similarly, we do in the case of the array to select a specific element.*/
const mylist = document.querySelectorAll('li');
console.log(mylist);
const firstItem = mylist[0];
const secondItem = mylist[1];
console.log(firstItem);
console.log(secondItem);


let cont = document.querySelector('.no');//fetch always first
console.log(cont);
cont = document.querySelector('.container');
console.log(cont.childNodes);//Here length is 14. childNodes takes new lines as text and also includes comment as childnodes
console.log(cont.childNodes[1]);
let a = cont.childNodes[0].nodeName;
let b = cont.childNodes[3].nodeType;//here [3] means 4th position in Nodelist and in 4th position text is present actually there is new line(space) present but here new line is consider as text in childNodes i.e nodeType print 3 in console from given below data 
console.log(a);//return type string
console.log(b);//return type integer
//For node Type given below are followed
// 1 represents Element Node like <h1>,<p>,<b>,etc
// 2 represents Attribute Node like 
// 3 represents Text Node
// 8 represents Comment Node
// 9 represents Document Node
// 10 represents Document Type Node is <!DOCTYPE html>
// 11 represents Document Fragment Node

console.log(cont.children);//Here length is 6. children doesn't take text,comments,and new line as childnodes it only takes Elements like h1,div,li,ul,form,etc

let c = cont.children[0].nodeName;
console.log(c);
let d = cont.children[5].nodeType;
console.log(d);

//To return the first and last child of a node, use the firstChild and lastChild property. The node can be of any node type, including text node, comment node, and element node. Similarly, firstElementChild and lastElementChild return the first and last child Element node, and the childNodes returns a live NodeList of all child nodes of any node type of a specified node.
let container = document.querySelector('div.container');
console.log(container.children[1].children);//children of children
console.log(container.children[1].children[0].children);
console.log(container.firstChild);//from NodeList firstChild is comment
console.log(container.firstElementChild);//from NodeList firstElementChild is h1 tag

console.log(container.lastChild);
console.log(container.lastElementChild);
console.log(container.children);
console.log(container.childElementCount); // Count of child elements i.e 6 . out of 14 only 6 are elements

/*Traversing upwards:-
There is one method to traverse upwards: parentElement
parentElement:-
The property that let us select the parent element is known as parentElement. The parentElement returns null if the parent node is not an element node.*/ 

/*Traversing sideways:-
There are two methods to traverse sideways. One of them is nextElementSibling, and the other one is previousElementSibling.

nextElementSibling:-
To select the next element, we use the nextElementSibling. The difference between this property and nextSibling is that nextSibling returns the next sibling node as an element node, a text node or a comment node, while nextElementSibling returns the next sibling node as an element node and ignores the text and comment nodes.*/

/*previousElementSibling:-
To select the previous element, we use previousElementSibling. The difference between this property and previousSibling, is that previousSibling returns the previous sibling node as an element node, a text node or a comment node, while previousElementSibling returns the previous sibling node as an element node and ignores the text and comment nodes.*/

console.log(container.firstElementChild);
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);

console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);

console.log(container.lastElementChild.previousElementSibling.previousElementSibling)

console.log(container.firstChild.nextSibling);
console.log(container.firstChild.parentElement);
console.log(container.lastChild.previousSibling.previousSibling.previousSibling);