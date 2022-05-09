//As we know, every web page resides inside a browser window, which can be considered as an object. A DOM represents the HTML document that is displayed in that window. The Document object has various properties that allow access to and modification of document content.

//Document Object Model:-
//We can access the document content and modified it is called the Document Object Model, or DOM. The Objects are organized in a hierarchy.The window object is at the top of the hierarchy. The second one is the document object. The HTML document that gets loaded into a window becomes a document object. The third one is the forms. Everything enclosed in the <form>...</form> tags sets the form object. And the last one is the Form control elements. The form object contains all the elements defined for that object, such as input fields, buttons, radio buttons, and checkboxes.The DOM is a tree-like representation of the contents of a webpage. Tree of “nodes” with different relationships depending on how they are arranged in the HTML document.

console.log(document);

let a = document;
a = document.all;
console.log(a);
Array.from(a).forEach(function(element){
    console.log(element);
})

b = document.body;
console.log(b);
c = document.forms[0];
console.log(c);

//With the Document Object Model (DOM),we can create and build documents, add, modify, or delete elements and content. Anything found in an HTML document can be accessed, changed, deleted, or added using the Document Object Model, with a few exceptions. 

d = document.links[0];
console.log(d);
e = document.head;
console.log(e);
f = document.baseURI;
console.log(f);
g = document.cookie;
console.log(g);
h = document.doctype;
console.log(h);
i = document.DOCUMENT_NODE;
console.log(i);
j = document.documentElement;
console.log(j);
k = document.embeds[0];
console.log(k);
l = document.implementation;
console.log(l);
m = document.DOCUMENT_NODE;
console.log(m);
n = document.title;
console.log(n);
o = document.timeline;
console.log(o);
p = document.URL;
console.log(p);
q = document.childNodes;
console.log(q);
r = document.scripts[0];
console.log(r);
s = document.images[0];//first image
console.log(s);
t = document.images[1];//second image
console.log(t);
u = document.images[2];//here undefine if third image present then shown here
console.log(u);

//Note that: The DOM is a representation of the various components of the browser and the current Web document that can be accessed or manipulated using JavaScript.