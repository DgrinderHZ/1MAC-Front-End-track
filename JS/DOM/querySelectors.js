/* Recap
In this section, we took a brief look the history of browser support for standard DOM methods, 
the rise of the jQuery library, and how jQuery's success brought about new DOM methods. 
The new DOM methods we looked at are

.querySelector() - returns a single element
.querySelectorAll() - returns a list of elements
*/
// find and return the element with an ID of "header"
document.querySelector('#header');

// find and return a list of elements with the class "header"
document.querySelectorAll('.header');
/*
We also took a brief look that the list returned by .querySelectorAll() is a NodeList. 
We saw that it is possible to loop over a NodeList with either its .forEach() method, 
or the humble for loop:
*/
const allHeaders = document.querySelectorAll('header');

for(let i = 0; i < allHeaders.length; i++){
    console.dir(allHeaders[i]);
}
