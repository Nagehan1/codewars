// You wake up one morning, and all numbers have been scrambled. The clock even has its numbers in all the wrong places. What is going on?

// You tell your friend, but they have no idea what you're talking about. After talking with your friend for a while, you get some information: a list of numbers (0-9) least to greatest.

// Your challenge is to now sort an array of numbers from least to greatest considering the list your friend gave you.

// You will be given two arrays. The first will be the KEY (the list your friend gave you with the 10 digits [as strings] from least to greatest). The second will be an array of numbers [as strings] to sort according to the key you are given.

// You will return an array of strings sorted according to the key given.

// // THE KEY //

// The key will be a 9-digit array that corresponds to the new order of numbers. You will not need to validate the key. It will contain each of the digits 0-9. Your code should accommodate any sequence of the digits 0-9.

//      ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
//        |    |    |    |    |    |    |    |    |    |
//        v    v    v    v    v    v    v    v    v    v
// KEY: ['6', '3', '8', '9', '0', '1', '5', '2', '4', '7']
// // The Sorting //

// The second argument in the function is an array that needs sorting. The sorting will be ascending according to the sequence passed to you through the key.

// // Examples //

// KEY: ['6', '3', '8', '9', '0', '1', '5', '2', '4', '7']
// To Sort: ['00', '0', '1', '4', '9', '10', '20', '25', '50', '75']

// Result: [ '9', '0', '1', '4', '00', '10', '50', '20', '25', '75' ]
// The "9" is first in the result because it corresponds to the number 3, which is less than both the "1" (5) and "4" (8).

// The "00" represents the value 44 and must appear in the correct place as "00".

// KEY: ['6', '3', '8', '9', '0', '1', '5', '2', '4', '7']
// To Sort: [ '000', '100', '200', '300', '400', '500', '600', '700', '800', '900']

// Result: [ '00', '300', '800', '900', '000', '100', '500', '200', '400', '700' ]
// The "50" (converts to 64) comes after "10" (54) but before "20" (74) and "25" (76).

// The "600" (044) must become "00" (44). This is because 6 evaluates to a "0" and zeroes are dropped on the front of numbers.

// KEY: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0']
// To Sort: [ '000', '100', '200', '300', '400', '500', '600', '700', '800', '900']

// Result: [ '00', '800', '700', '600', '500', '400', '300', '200', '100', '000']
// This is similar to the last example, except the key has changed. Notice the "00" in the front. This started as "900" but since 9 => 0 and 0 => 9, it evaluates to 99 which is less than "800" (100).

// // 




