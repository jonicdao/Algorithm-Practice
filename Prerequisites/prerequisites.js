// Assignment: Print 1-255
// Write a program that would print all the numbers from 1 to 255

// function printNum(){
//     for (var i = 0; i<=255; i++){
//         console.log(i);
//     }
// }

// printNum();

// Assignment: Odd Numbers
// Write a program that would print all the odd numbers from 1 to 1000

// function printNum(){
//     for (var i = 1; i<=1000; i+=2){
//         console.log(i);
//     }
// }

// printNum();

// Assignment: Print Sum
// Write a program that would print the sum of all the odd numbers from 1 to 5000

// var sum =0;
// for (var i = 1; i <=5000; i+=2) {
//     sum += i;
// }
// console.log(sum);


// Assignment: Iterating Through the Array
// Given an array X say [1,3,5,7,9,13], write a program that would iterate through each member of the array and print each value on the screen.  Being able to loop through each member of the array is extremely important. Do this over and over (under 2 minutes) before moving on to the next algorithm challenge.

// var X = [1,3,5,7,9,13];

// for (var i = 0; i < X.length; i++) {
//     console.log(X[i]);
// }

// Assignment: Find Max
// Given an array with multiple values (e.g. [-3, 3, 5, 7]), write a program that prints the maximum number in the array. (The best way to do this is to have the computer go through each number, one at a time, and to update the value in a variable called 'maximum' (or whatever you want to name the variable);  imagine that if I gave you no number and asked you what a maximum number is.  What would you say?  Say the first number I gave you was -3 and asked you what a maximum number is.  What would you say? Say the next number I gave you was 3 and asked you again what a maximum number now is.  What would you say?  Have the computer imitate this behavior of updating the maximum number as you iterate through each number in the array).  Again you're not to use any of the pre-built functions 

// var arr = [-3, 3, 5, 7];
// var max = arr[0];
// for (var i=1; i<arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }

// console.log(max);

// Assignment: Find Average
// Given an array with multiple values (e.g. [1,3,5,7,20]), write a program that prints the average of the values in the array.  Again you're not to do this by using of any of the pre-built functions in Javascript.  Again iterate through each number in the array and update the 'average' as the program retrieves each number in the array.

// x = [1,3,5,7,20];
// var ave = 0;
// var sum = 0;
// for (var i = 0; i < x.length; i++) {
//     sum += x[i];
// }
// console.log(ave = sum/x.length);

// Assignment: Array With Odd Numbers
// Write a program that creates an array 'Y' that contains all the odd numbers between 1 to 255. When the program is done, 'y' should have the value of [1, 3, 5, 7, ... 255]. Again, make sure you come up with a simple base case and write instructions to solve that base case first and then test your instructions for other complicated cases. (you can do this using a simple for loop.  You are allowed to use .push method)

// var y = [];
// for (var i = 1; i<=255; i+=2) {
//     y.push(i);
// }
// console.log(y);

// Assignment: Greater Than Y
// Write a program that takes an array and returns the number of values in that array whose value is greater than y. For example, if array = [1,3, 5, 7] and y = 3, after your program is run it will print 2 (since there are two values in the array whose value is greater than 3).  Again make sure you come up with a simple base case and write instructions to solve that base case first and then test your instructions for other complicated cases. You can use a count function with this assignment.

// var array = [1,3, 5, 7];
// var y = 3;
// var count = 0;

// function GreaterThan(arr, y) {
//     for (var i = 0; i<array.length; i++) {
//         if ( arr[i] > y) {
//             count++;
//         }
//     }
//     console.log(count);
// }

// GreaterThan(array, y);

// Assignment: Square the Values
// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that squares each value in the array.  When the program is done x should have values that have been squared (e.g. [1, 25, 100, 4]).  You're not to use any of the pre-built function in Javascript.  You could for example square the value by saying x[i] = x[i] * x[i];

// var x = [1,5, 10, -2];
// function squareValues(x) {
//     for (var i = 0; i < x.length; i++) {
//         x[i] =x[i] * x[i];
//     }
//     console.log(x);
// }

// squareValues(x);

// Assignment: Eliminate Negative Numbers
// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that replaces any negative number with the value of 0.  When the program is done x should have no negative values (e.g. [1, 5, 10, 0]).

// var arr = [1,5, 10, -2];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i]<0) {
//         arr[i] =0;
//     }
// }
// console.log(arr);

// Assignment: Max, Min, and Average
// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that prints the maximum number in the array, minimum value in the array as well as the average values in the array. 

// var x = [1,5, 10, -2];

// var max = x[0];
// var min = x[0];
// var sum = 0 + x[0];


// for (var i = 1; i < x.length; i++) {
//     if (x[i] > max) {
//         max = x[i];
//     }

//     if (x[i] < min) {
//         min = x[i];
//     }
//     sum += x[i];
//     var ave = sum/x.length;
// }
// console.log('max:', max);
// console.log('min:', min);
// console.log('ave:', ave);

// Given an array x (e.g. [1,5, 10, 7, -2]), create an algorithm (sets of instructions) that shifts each number by one (to the front).  For example when the program is done x (assuming it was [1,5,10,7,-2]) should become [5,10,7,-2, 0].  

// var x = [1,5, 10, 7, -2];
// for  (var i = 0; i < x.length-1; i++) {
//     x[i] = x[i+1];
// }
// x[x.length-1] = 0;

// Assignment: Number to String
// Write a program that takes an array of numbers and replaces any number that's negative to a string called 'Dojo'. For example if array = [-1, -3, 2] after your program is done array should be ['Dojo', 'Dojo', 2].

// var arr = [-1, -3, 2];
// for (var i = 0; i< arr.length; i++) {
//     if (arr[i] < 0) {
//         arr[i] = 'Dojo';
//     }
// }
// console.log(arr);

// Assignment: Random Array
// Create an array X and fill the array with 10 values, each value being a random integer between 0 to 100.  For example when your program is done, X could be something like this: [35, 15, 3, 39, 53, 93, 25, 39, 59, 21].

// var x = [];
// for (var i =0 ; i<10; i++) {
//     x.push(Math.floor(Math.random()*101));
// }
// console.log(x);

// Assignment: Swapping two values
// Write a program that takes an array of numbers and returns an array where the first and last numbers in the array have been switched.For example say x = [2, 3, 5, 7, 6]. By the end of the program x, should be [6, 3, 5, 7, 2]. Do this without creating an empty array.

// var arr = [2, 3, 5, 7, 6];
// var temp1 = arr[0];
// arr[0]= arr[arr.length-1];
// arr[arr.length-1] = temp1;
// console.log(arr);

// Assignment: Reversing
// Given an array X of multiple values (e.g. [-3,5,1,3,2,10]), write a program that reverses the values in the array.  Once your program is done X should be in the reserved order.  Do this without creating a temporary array.  Also, do NOT use the reverse method but find a way to reverse the values in the array (HINT: swap the first value with the last; second with the second to last and so forth).

// var x = [-3,5,1,3,2,10];
// for (var i = 0 ; i < Math.floor(x.length/2); i++) {
//     var temp1 = x[i];
//     x[i] = x[x.length-1-i];
//     x[x.length-1-i] = temp1;
//     console.log(x);
// }

// Assignment: Insert X in Y
// Write a program that inserts a new number X at an index Y. For example if array = [1, 3, 5, 7] and X = 10, and Y = 2, by the end of your program array should be [1, 3, 10, 5, 7] (in other words we added '10' on index 2). Check the output of your array once your program is completed to make sure it's working correctly.

// var arr = [1, 3, 5, 7];
// var x = 10;
// var y = 2;
// arr.push(0);
// arr[arr.length-1] = arr[arr.length-2];
// arr[arr.length-2] = arr[arr.length-3];
// arr[y] =x;

// for (var i = arr.length-1; i > y; i--) {
//     arr[i] = arr[i-1];
// }
// arr[y]=x;
// console.log(arr);

// Assignment: Removing Negatives
// Given an array of multiple values (e.g. [0, -1, 2, -3, 4, -5, 6]), write a program that removes any negative values in that array.  Once your program is done, the array should be composed of only the non-negative numbers, in their original order.  Do this without creating a temporary array; only use the pop() method to remove values from the array.

// var arr = [0, -1, 2, -3, 4, -5, 6];
// for (var i = 0, j = 0, l = arr.length; i < l; i++) {
//     if (arr[i] >= 0) {
//         console.log('j before assignment ' +j);
//         arr[j++] = arr[i];
//         console.log('j after assignment ' +j);
//         console.log('arr is curently ' + arr);
//     }
// }
// arr.length = j;

// console.log(arr);
