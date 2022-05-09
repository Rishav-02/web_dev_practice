//Events and Events Handlers?
//Events are actions that happen in the webpage like clicking a button or submit the form. If the user selects a button on a webpage, we might want to respond to that action by displaying an alert on the webpage. Each available event has an "event handler", which is a block of code that runs when the event occurred. Event handlers are sometimes called "event listeners". The listener listens out for the event happening, and the handler is the code that is run in response to it happening. There are many ways to assign a handler. Let us see them, starting from the simplest one.
//addEventListener():-
//SYNTAX:- element.addEventListener(event, function, useCapture);

/*The first parameter is the type of event like "click" or "mousedown". 
The second parameter is the function we want to call when the event occurs.
The third parameter is optional. It is a boolean value specifying whether to use event bubbling or event capturing.*/ 
//Alert "Event Occurred" when the user clicks on an element:  
//The use clicks a button it is a event.
document.addEventListener("click", function(){ alert ("You Click then Event Occurred"); });

document.getElementById("heading").addEventListener("click", function(myfun){         //myfun argument is event object
let variable;
console.log("You have clicked on the heading");//click the heading i.e Welcome to code of javascript. to see the effect
console.log(myfun);//All property inside it in console tab

//location.href = 'https://www.w3schools.com'//redirect to website

//There are many properties, and these depend on the event type. The keyboard events and pointer events have a different set of properties. Here are some properties of the event object

//Event Property and Methods:-
variable = myfun.type;//It will tell the event type,here click
console.log(variable);
variable = myfun.target;//
console.log(variable);
variable = myfun.target.className;
console.log(variable);
variable = myfun.target.id;
console.log(variable);
variable = myfun.target.classList;
console.log(variable);
variable = Array.from(myfun.target.classList);
console.log(variable)
variable = myfun.offsetX;//click in letter of heading to see number i.e element ke relative kitna distance X axis me click kiya
console.log(variable);
variable = myfun.offsetY;//vertically upper se kitna distance Y axis mw click kr rahe hai 
console.log(variable);
//clientX / event.clientY: It returns the window-relative coordinates of the cursor, for pointer events.
variable = myfun.clientX;//It will return the horizontal coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered.
console.log(variable);
variable = myfun.clientY;//It will return the vertical coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered.
console.log(variable);
variable = myfun.detail;
console.log(variable);
variable = myfun.pointerType;
console.log(variable);
variable = myfun.timeStamp;
console.log(variable);
variable = myfun.view;
console.log(variable);
});

