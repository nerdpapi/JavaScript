let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let num3 = Number(prompt("Enter third number:"));

function signChecker(num1, num2, num3) {
    let sign = "";

    if (num1 > 0) {
        sign += "+";
    } else if (num1 < 0) {
        sign += "-";
    } else {
        sign += "0";
    }

    if (num2 > 0) {
        sign += "+";
    } else if (num2 < 0) {
        sign += "-";
    } else {
        sign += "0";
    }

    if (num3 > 0) {
        sign += "+";
    } else if (num3 < 0) {
        sign += "-";
    } else {
        sign += "0";
    }

    return sign;
}

console.log(signChecker(num1, num2, num3));


//Using Trenary operator
function signChecker(num1, num2, num3) {
    let sign = "";
    (num1 > 0) ? sign += "+" : (num1 < 0) ? sign += "-" : sign += "0";

    (num2 > 0) ? sign += "+" : (num2 < 0) ? sign += "-" : sign += "0";

    (num3 > 0) ? sign += "+" : (num3 < 0) ? sign += "-" : sign += "0";

    return sign;
}

console.log(signChecker(num1, num2, num3));

//optimised ternary operator function
function signChecker(num1, num2, num3) {
    let sign = "";
    sign += num1 > 0 ? "+" : num1 < 0 ? "-" : "0";

    sign += num2 > 0 ? "+" : num2 < 0 ? "-" : "0";

    sign += num3 > 0 ? "+" : num3 < 0 ? "-" : "0";

    return sign;
}

console.log(signChecker(num1, num2, num3));
