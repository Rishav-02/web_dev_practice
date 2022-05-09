/* Web applications can store data locally within the user's browser with web storage. Before HTML5, application data stored in cookies, included in every server request. But with the Advent of Html5, we have got various options to store information on the client browser. Previously we were having only cookies, which were very restrictive, and the size of the cookies was very small. But now the web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. We have local storage and session storage. We can access the web storage by right-clicking on the webpage and then selecting option applications. Here we can see the option of local and session storage. Let's talk about all these web storage in detail.*/

//Inspect->Applicaton in Chrome tools in same line of console

/*HTML Web Storage Objects:-
HTML web storage provides us with two objects for storing data:
window.localStorage – It stores the data with no expiration date
window.sessionStorage -It stores the data for one session. That means the data is lost when the browser tab is closed.*/

//write all these in console to see what happen
/* window.localStorage
Storage {Name2: 'Alok', Name: 'Rishav', length: 2}Name: "Rishav"Name2: "Alok"length: 2
typeof window.localStorage
'object'
window.localStorage.Name
'Rishav'
typeof window.localStorage.Name
'string'  */

/* LocalStorage:-
The way to store data on the client's computer is by local storage. The local storage allows us to save the key/value pairs in a web browser, and it stores data with no expiration date. We can access local storage via JavaScript and HTML5. However, the user can clear the browser data to erase all localStorage data.*/

//Storing JSON Objects:- Use JSON.stringify to store more complex objects and JSON.parse to read them. 

let fruitArray = ['mango','grapes','apple','pineapple'];

// Add a key-value pair inside local Storage i.e Creating Enteries using setItem
localStorage.setItem('Name', 'Rishav');
localStorage.setItem('Name2', 'Alok');
localStorage.setItem('Fruit', fruitArray);//Convert to 'string' then save in localstorage
localStorage.setItem('Fruits', JSON.stringify(fruitArray));//JSON.stringify() take object as argument and return string and convert this object to string

// Retrieve an item from the local Storage i.e Reading Entries using getItem
let Name = localStorage.getItem('Name2');
console.log(Name);
let Num = localStorage.getItem('Name3');//Name3 does not exist i.e null
console.log(Num);
let fruit = localStorage.getItem('Fruit');//string
console.log(fruit);
let fry = localStorage.getItem('Fruits');//In console it looks like [Array] but it is a 'string'
console.log(fry);

fry = JSON.parse(localStorage.getItem('Fruits'));//JSON.parse() take string as argument and return object and convert this string to object here Array
console.log(fry);
a = typeof fry;
console.log(a);//return object

// Clears the entire local storage
// localStorage.clear();

// Delete a particular key-value pair i.e Deleting Entries using removeItem
localStorage.removeItem('Name2');
// localStorage.removeItem('Fruit');

/* Session storage:-
The session storage is used to store data only for a session, meaning that it is stored until the browser (or tab) is closed. Remember that, in session storage, the data is never transferred to the server and can only be read on the client-side. The storage limit is between 5-10MB. By opening multiple windows or tabs with the same URL creates sessionStorage for each tab or window.*/

//All functions and syntax I use in localstorage is also works for sessionstorage.
let Array = ['100','200','300']
sessionStorage.setItem('sessionName', 'Ram');
sessionStorage.setItem('sessionName2', 'Rohan');
sessionStorage.setItem('sessionNum', JSON.stringify(Array));

sessionStorage.clear();