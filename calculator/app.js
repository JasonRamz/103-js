// Calculator using myArray operations
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "Cannot divide by zero";
    }
}

const operations = [add, subtract, multiply, divide];

while (true) {
    console.log("Calculator Menu:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Exit");

    let choice = parseInt(prompt("Enter your choice (add/sub/mult/div/exit):"));

    if (choice === 5) {
        console.log("Exiting the calculator.");
        break;
    }

    if (choice < 1 || choice > 4) {
        console.log("Invalid choice");
        continue;
    }

    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    let result = operations[choice - 1](num1, num2);

    console.log(`Result: ${result}`);
}
