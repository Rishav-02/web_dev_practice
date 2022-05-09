//Manipulating Websites using JS Window Object
//we will begin to make things happen on the screen, which is one of the main purposes of using JavaScript.

//The window object represents a window in the browser containing the DOM document. The browser automatically creates a window object. The window is not the object of the JavaScript. It is the object of the browser. A window can be the main window, a frameset, or even a new window created with JavaScript. The developers use the window object to close and open browser window, displaying alert and prompt dialogs.

//The window object properties are the variables created inside the window object. We can access the properties of window object by using the syntax:

//window.propertyname
//where property name is the name of the property.

//The following are the most popular window object properties:

//PropertiesExplanation:-

//width---It specifies the initial width of the browser window.
//height---It specifies the initial height of the browser window.
//innerWidth---It specifies the initial width of the window content area.
//innerHeight---It specifies the initial height of the window content area.
//outerWidth---It specifies the initial width of the navigator window.
//outerHeight---It specifies the initial height of the navigator window
//menubar---It specifies whether the window should contain the browser menubar.
//location---It specifies whether the window should contain the browser location/URL box.
//scrollbars---It hides or shows browser horizontal/vertical scrollbars.
//top---Specified the number of pixels from the top of the screen to the new window.

//The window object methods are the functions that are created inside the Window Object. These methods are used to perform various actions on the browser window, such as how it displays a message or gets input from the user.

//Following are the some of the most commonly used window object methods:

//Methods                   

//alert()--It will display an alert box with a message on the screen
//blur()--It will remove focus from the current window
//close()--It will close the current window
//confirm()--It will display a dialog box with a message on the screen
//focus()--It will set the focus to the current window
//moveTo()--It will move a window to the specified position
//open()--It will open a new browser window
//print()--It will print the content of the current window
//prompt()--It will display a dialog box that prompts the user for input
//resizeBy()--It will resize the window by the specified pixels
//resizeTo()--It will resize the window to the specified height and width
//scrollBy()--It will scroll the document by the specified number of pixels
//scrollTo()--It will scroll the document to the specified coordinates
//stop()--//It will stop the window from loading

//object
let a = window.document;

a = innerHeight;//window.  is not must because window is global variable
console.log(a);
b = window.innerWidth;
console.log(b);
c = window.menubar;
console.log(c);
d = window.location;
console.log(d);
e = window.history;
console.log(e);   
f = window.top;
console.log(f);
g = window.scrollX;//scroll website in horizontal to see effect
console.log(g);
h = scrollY;//scroll website in vertical to see effect
console.log(h);
i = window.outerWidth;
console.log(i);
j = window.outerHeight;
console.log(j);

//window.functionname bhi write kr sakte hai give same result i.e window.confirm because window is global object(variable) in client-side javascript.

alert('Rishav Raj');
a = prompt('This will destroy your computer. Type your name');
// a = confirm('Are you confirm to delete this page?');//assign boolean value
// a = blur('remove focus');//remove detail of location and window history and other object
// a = close('close');
// a = focus('set focus');
// a = open('new window');
// a = print('print the page from the printer');
// a = moveTo(100, 100);
// a = resizeBy(100,100);
// a = stop('cancel the load');
console.log(a);