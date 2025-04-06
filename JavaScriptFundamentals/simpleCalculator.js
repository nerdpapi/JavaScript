let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter Operator:");
function simpleCalculator(num1, num2, operator) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input. Please enter numeric values.";
    }

    switch (operator) {
        case '+':
            return num1 + num2;

        case '-':
            return num1 - num2;

        case '*':
            return num1 * num2;

        case '/':
            if (num2 === 0) {
                return "Cannot divide by zero.";
            } else {
                return num1 / num2;
            }
        default:
            return "Unsupported operator. Please enter a valid operator (+, -, *, /).";
    }
}

// Call the function and assign the result to the result variable
let result = simpleCalculator(num1, num2, operator);
console.log(result)