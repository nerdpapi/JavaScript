// Prompt the user to enter numbers separated by spaces
let input = prompt("Enter numbers separated by spaces");

// Split the input string into an array of substrings based on spaces and convert them to numbers
let arr = input.split(' ').map(Number);

// Function to calculate the sum of odd and even numbers 
function oddOrEvenSum(arr) {
    let oddSum = 0;  // Variable to store the sum of odd numbers
    let evenSum = 0; // Variable to store the sum of even numbers

    // Loop through each number in the array
    for (let num of arr) {
        if (num % 2 === 0) {  // Check if the number is even
            evenSum += num;    // Add the even number to evenSum
            continue;          // Skip the rest of the loop and move to the next number
        }

        oddSum += num; // If the number is odd, add it to oddSum
    }

    // Return an object containing the sums of odd and even numbers
    return { oddSum, evenSum };
}

// Call the function and log the result
console.log(oddOrEvenSum(arr));

// // Loop to handle multiple test cases
// // Read multiple test cases from the user
// let testCases = prompt("Enter the number of test cases:");

// // Convert testCases into a number
// testCases = Number(testCases);

// for (let i = 1; i <= testCases; i++) {
//     let input = prompt(`Enter numbers separated by spaces for Test Case ${i}:`);
//     let arr = input.split(' ').map(Number); // Convert input into an array of numbers
//     console.log(`Test Case ${i}:`, oddOrEvenSum(arr)); // Display result for each test case
// }

