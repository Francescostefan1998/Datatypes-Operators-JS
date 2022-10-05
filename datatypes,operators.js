/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* The main Datatypes in Javascript are: Numbers, Strings, Boolean, Null, Undefined, Symbol, Blglnt
The Numbers are the data that Javascript recognise as numeric value and as a consequence they follow the math rules
The Strings are every data surronded by quotes ("" , '') and can contain words, numbers...
Boolean can just be true or false, they answer a question "yes or not"?
Null is a data that specified that there is not value in that variable
Undefined is a data that specified that we are not aware of what there is inside that variable
Blglnt is a different kind of number or math operation
Symbols can contain other different datatypes, like numbers, strings..
 */

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* A Variable form me is like an empty container, defined with a name.
The name of this container is like his own label */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* let smallnumber = 12;
let biggernumber = 20;
let sumofthenumber = smallnumber + biggernumber;
console.log("sum: ", sumofthenumber) */

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* let x = 12; */

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* let name = "John Doe" */

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* 
let y = 12;
let subtraction = y - x;
 */

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* 
let name1 = "john";
let name2 = "John";
let names = name1 === name2;
console.log("The two names are equal: ", names)
let namesequal = name1.toLocaleLowerCase === name2.toLocaleLowerCase;
console.log("The two names are equal: ", namesequal)
*/
 
/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* 
let x = 6;
if (x === 1) { console.log("one") } 
if (x === 2) { console.log("two") } 
if (x === 3) { console.log("three") } 
if (x === 4) { console.log("four") } 
if (x === 5) { console.log("five") } 
if (x === 6) { console.log("six") } 
if (x === 7) { console.log("seven") } 
if (x === 8) { console.log("eight") } 
if (x === 9) { console.log("nine") } 
 */

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* 
let paccoamazon = 34
let shipping = 4

let total = paccoamazon >= 50 ? paccoamazon : paccoamazon + shipping;
console.log(total);
 */