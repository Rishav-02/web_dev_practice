//The appendChild() method is used to create a text node as the node's last child. Appending in JavaScript is a way to insert content to the end of already existing elements. To append in Javascript, we use the appendChild() method. 

//Syntax: node.appendChild(node)

let element = document.createElement('li');
let text = document.createTextNode('It is a text node');
element.appendChild(text);//add element to HTML page
console.log(text);

// Add a class name to the li element
element.className = 'method';
element.id = 'createdLi';
element.setAttribute('title', 'ourtitle');
console.log(element);
// element.innerText = '<b>Hello this text is created</b>';
// element.innerHTML = '<b>this html text is written by rishav</b>';
//This both innerText and innerHTML shown in HTML page and innerText print in plain text and innerHTML with <b> bold letter.

let a = document.querySelector('ul.new');
a.appendChild(element);
console.log(a);
console.log(element);

let elem2 = document.createElement('p');
console.log(elem2);
elem2.id = 'elem';
elem2.className = 'elem1';
let tnode = document.createTextNode('This is a created paragraph for elem2');
elem2.appendChild(tnode);
//The replaceWith() method replaces this ChildNode in the children list of its parent with a set of Node.
element.replaceWith(elem2);//replace the line 2 text to line 24 text in HTML page

let child = document.getElementById('mynew');//child is a variable
console.log(child);
//here we will replace an existing node my1 with the new node element
child.replaceChild(element, document.getElementById('my1'));//Creating is replaced by It is a text node
child.removeChild(document.getElementById('my5'));//'the' is remove from HTML page

//This method removes a specified child node of the specified element. It will return the removed node as a Node object, or null if the node does not exist. Remember that the removed child node is no longer part of the DOM. In the following example, we will find out if a list has any child nodes. If so, remove its second child node.
let list = document.getElementById('mynew');
if(list.hasChildNodes()){
    // list.removeChild(list.childNodes[1]);
}

let p = elem2.getAttribute('class');
console.log(p);
p = elem2.getAttribute('target');
console.log(p);
p = elem2.hasAttribute('href');//return type Boolean. href not present so false
console.log(p);
p = elem2.hasAttribute('id');//id present in elem2 variable so true
console.log(p);
elem2.removeAttribute('title');//id,class,title removed according to given parameter
elem2.setAttribute("href","https://facebook.com");//href set
console.log(elem2);