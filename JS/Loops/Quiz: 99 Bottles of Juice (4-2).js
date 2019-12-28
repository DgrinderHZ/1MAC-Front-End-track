/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
var part1 = " of juice on the wall! ";
var part2 = " of juice! Take one down, pass it around... ";
var part3 = " of juice on the wall!";
while (num >= 1) {
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    if(num > 1)
        console.log(num +" bottles" + part1 + num + " bottles"+ part2 + (num-1) + ((num == 2)?" bottle":" bottles")+part3);
    else
        console.log(num +" bottle" + part1 + num + " bottle"+ part2 + (num-1) + " bottles"+part3);
    // decrement num
    num--;
}
