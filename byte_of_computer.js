// Assignment: iSum
// Go ahead and implement a function iSum that behaves just like rSum but instead of using recursion to implement the solution it uses iteration.

// var num = 5;
// function isum(num) {
//     var sum = 0;
//     for (var i=0; i<=num; i++) {
//         sum +=i;
//     }
//     return sum;
// }
// console.log(isum(num));

// Assignment: iFactorial
// Write a function iFactorial that behaves like the following:

// iFactorial(1) = 1                  => 1
// iFactorial(2) = 2 * 1              => 2
// iFactorial(3) = 3 * 2 * 1          => 6
// iFactorial(4) = 4 * 3 * 2 * 1      => 24
// iFactorial(5) = 5 * 4 * 3 * 2 * 1  => 120
// Make sure your solution is iterative and not recursive. We will be implementing the recursive solution the next tab.

// var prod = 1;
// function iFactorial(num) {
//     for (var i = 1; i<=num; i++) {
//         prod *= i;
//     }
//     return prod;
// }

// console.log(iFactorial(3));

// Assignment: rFactorial
// Write a function rFactorial that behaves like the following:

// rFactorial(1) = 1                  => 1
// rFactorial(2) = 2 * 1              => 2
// rFactorial(3) = 3 * 2 * 1          => 6
// rFactorial(4) = 4 * 3 * 2 * 1      => 24
// rFactorial(5) = 5 * 4 * 3 * 2 * 1  => 120
// Make sure your solution is recursive.


// function rFactorial(num) {
//     if (num === 1) {
//         return 1;
//     } else {
//         return num * rFactorial(num-1);
//     }
// }

// console.log(rFactorial(3));

// Write a function iFibonacci that behaves like the following:

// iFibonacci(0) = 0           => 0
// iFibonacci(1) = 1           => 1
// iFibonacci(2) = 1           => 1
// iFibonacci(3) = 1 + 1       => 2
// iFibonacci(4) = 1 + 2       => 3
// iFibonacci(5) = 2 + 3       => 5
// iFibonacci(6) = 3 + 5       => 8
// Make sure your solution is iterative.

// function iFibonacci(num) {
//     var fib=[0,1];
//     for (var i = 0; i< num; i++) {
//         fib.push(fib[0] + fib[1]);
//         console.log(fib);
//         fib.shift();
//         console.log(fib, i);
//     }
//     return fib[0];
// }
// console.log(iFibonacci(6));


// Assignment: rFibonacci
// Write a function iFibonacci that behaves like the following:

// rFibonacci(0) = 0           => 0
// rFibonacci(1) = 1           => 1
// rFibonacci(2) = 1           => 1
// rFibonacci(3) = 1 + 1       => 2
// rFibonacci(4) = 1 + 2       => 3
// rFibonacci(5) = 2 + 3       => 5
// rFibonacci(6) = 3 + 5       => 8
// Or I guess it can be written this way too...

// rFibonacci(0) = 0                                  => 0
// rFibonacci(1) = 1                                  => 1
// rFibonacci(2) = rFibonacci(0) + rFibonacci(1)      => 1
// rFibonacci(3) = rFibonacci(1) + rFibonacci(2)      => 2
// rFibonacci(4) = rFibonacci(2) + rFibonacci(3)      => 3
// rFibonacci(5) = rFibonacci(3) + rFibonacci(4)      => 5
// rFibonacci(6) = rFibonacci(4) + rFibonacci(5)      => 8
// Make sure your solution is recursive.

// function rFibonacci(num) {
//     if (num === 1 || num === 2) {
//         return 1;
//     } else {
//         return rFibonacci(num-1)+ rFibonacci(num-2); 
//     }
// }
// console.log(rFibonacci(4));

// Write a function rBS that behaves like the following:

// var arr = [-90,-19,0,2,12,29,33,190,320];
// rBS(arr, 5)              => false
// rBS(arr, 12)             => 4
// rBS(arr, 0)              => 2
// rBS(arr, 190)            => 7
// rBS takes in an array and a value to search for. If the value is found within the array then rBS will return the index where the found value is. If the value is not found within the array then rBS returns false. Make sure your solution is recursive. Does your function need to have optional additional parameters? After that first initial call, successive recursive calls to itself might need these. 

// var arr = [-90,-19,0,2,12,29,33,190,320];


// function rBS(arr, num, start, end) {
//     var start = 0;
//     var end = arr.length-1
//     while (min <= max) {
//         var mid = (min+max)/2;
//         if (num > arr[mid]) {
//             return rBS(arr, mid +1);
//         } else if (num < arr[mid]) {
//             return rBS(arr, mid -1);
//         } else {
//             return mid;
//         }
//     }

//     return false;
// }

// console.log(rBS(arr, 2));

// let recursiveFunction = function (arr, x, start, end) { 
	
// 	// Base Condition 
// 	if (start > end) return false; 

// 	// Find the middle index 
// 	let mid=Math.floor((start + end)/2); 

// 	// Compare mid with given key x 
// 	if (arr[mid]===x) return mid; 
		
// 	// If element at mid is greater than x, 
// 	// search in the left half of mid 
// 	if(arr[mid] > x) 
// 		return recursiveFunction(arr, x, start, mid-1); 
// 	else

// 		// If element at mid is smaller than x, 
// 		// search in the right half of mid 
// 		return recursiveFunction(arr, x, mid+1, end); 
// } 

// let arr = [1, 3, 5, 7, 8, 9]; 
// let x = 5; 

// console.log(recursiveFunction(arr, x, 0, arr.length-1));


// x = 6; 

// if (recursiveFunction(arr, x, 0, arr.length-1)) 
// 	console.log("Element found!<br>"); 
// else console.log("Element not found!<br>"); 


// Assignment: iBS
// Write a function iBS that behaves like the following:

// var arr = [-90,-19,0,2,12,29,33,190,320];
// iBS(arr, 5)              => false
// iBS(arr, 12)             => 4
// iBS(arr, 0)              => 2
// iBS(arr, 190)            => 7
// iBS takes in an array and a value to search for. If the value is found in the array then iBS will return the index where the found value is. If the value is not found in the array then iBS returns false. Make sure your solution is iterative.

// Pseudocode
// 1. Set lower bound to first position of array

// 2. Set upper bound to last position of array

// 3. While lower bound is less than or equal to the upper bound do the following steps:

// Set midpoint as upper bound plus lower bound divided by 2
// If midpoint element is less than the data being searched for, set new lower bound to midpoint + 1
// If midpoint element is greater than the data being searched for, set new upper bound to the midpoint - 1
// else midpoint is the found element

// let arr = [-90,-19,0,2,12,29,33,190,320];
// let num = 29;


// function iBS(arr, num) {
//     let min = 0;
//     let max = arr.length;
//     while (min <= max) {
//         let mid = Math.floor((min + max) / 2);
//         if (arr[mid] === num) {
//             return mid;
//         } else if (arr[mid] < num) {
//             min = mid + 1;
//         } else {
//             max = mid - 1;
//         }    
//     }
// }


// console.log(iBS(arr, num));

