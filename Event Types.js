/* The JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page. When the user clicks a button, it is called an event. Events are a part of the Document Object Model(DOM), and every HTML element contains a set of events that can trigger the JavaScript Code.

Although different events like onclick, onsubmit, etc. Now let's explore more events available in JavaScript. There are three types of events, mouse events, input events, and keyboard events. Here are some important events, along with the example. Let's Start */

let btn = document.getElementById('btn');//'btn' is the id of submit button
btn.addEventListener('click', func1);//click submit button
btn.addEventListener('dblclick', func2);//2 times click instantly
btn.addEventListener('mousedown', func3);

function func1(e) {
    console.log("WELCOME");
    console.log(e);
    e.preventDefault();//prevent the form from submit i.e not to submit the form
}

function func2(e) {
    console.log("Wow its a double click", e);
    e.preventDefault();//Default is onclick of submit button then form submitted instantly
}

function func3(e) {
    console.log("mouse down event occur", e);//include left,right click
    e.preventDefault();
}

//1st method 
// let a = document.querySelector('.no');
// a.addEventListener('mouseenter', fun);

// function fun() {
//     console.log("mouse enter");
// }

//2nd method both method are correct but I prefer 2nd method
document.querySelector('.no').addEventListener('mouseenter', function(){
    console.log('You entered in no');
})

document.querySelector('.no').addEventListener('mouseleave', function(){
    console.log('You exit from no');
})

//For an element when a mouse or other pointing device is used to move the cursor onto the element or one of its child elements, "mouseover" event is fired. Whereas, for an element when a mouse or other pointing device is used to move the cursor so that it is no longer contained within the element or one of its children, the "mouseout" event is fired.

const search = document.getElementById('myfirst');
search.addEventListener('mouseenter', function(){
search.style.border = '5px solid blue';});

const mouseTarget = document.getElementById('sea');
mouseTarget.addEventListener('mouseleave', function(e){
mouseTarget.style.backgroundColor = 'Yellow'; });

/* The "mousedown" event is fired at an element when the pointing device like mouse button is pressed while the pointer is inside the element. Whereas, the "mouseup" event is fired at an element when a button on a pointing device is released while the pointer is located inside it.

 There is a difference between click and mousedown event. As we know, that click event occurs after a full click action; that is, the mouse button is pressed and released while the pointer remains inside the same element. Whereas, the mousedown event is fired the moment the button is initially pressed.*/

document.querySelector('#num').addEventListener('mousedown',function(){
    console.log('You down the mouse');
})

document.querySelector('.no1').addEventListener('mouseup',function(){
    console.log('You up the mouse');
})

const up= document.querySelector('.no2');
up.addEventListener("mouseup", function() { up.style.color = 'green' ;});

//For an element when a mouse or other pointing device is used to move the cursor onto the element or one of its child elements, "mouseover" event is fired. Whereas, for an element when a mouse or other pointing device is used to move the cursor so that it is no longer contained within the element or one of its children, the "mouseout" event is fired.

const test= document.querySelector('#heading');
test.addEventListener("mouseover", function() { test.style.color = "red";});

const over= document.getElementById('web');
over.addEventListener("mouseout", function( event ) { event.target.style.color = "aqua";});

//The "mousemove" event takes place at an element when a mouse is moved while the cursor's hotspot is inside it. This event works fine, but we should know that it may take quite some system time to process all mousemove events. If we move the mouse one pixel, the mousemove event fires. 

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},115)`;
    document.body.style.color = 'orange'
    console.log('You triggered mouse move event')
})