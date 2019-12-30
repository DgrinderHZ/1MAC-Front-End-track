/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

// your code goes here
// Remove "Blackberry"
rainbow.splice(2, 1);
// Add "Yellow" and "Green"
rainbow.splice(2, 0, "Yellow", "Green");
// Add "Purple"
rainbow.splice(rainbow.length, 0, "Purple");
console.log(rainbow);
