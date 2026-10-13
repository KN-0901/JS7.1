// Function to perform basic mathematical calculations
function calculate(operation) {
    // 1. Retrieve and parse input values into floating-point numbers
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    
    const resultDisplay = document.getElementById('result');
    let result;

    // Remove old error highlights if present
    resultDisplay.classList.remove('error-msg');

    // 2. Use conditional logic if validation boundaries checks fail
    if (isNaN(number1) || isNaN(number2)) {
        result = 'Please enter valid numbers.';
        resultDisplay.classList.add('error-msg');
    } else {
        // 3. Switch statement evaluates operations based on string parameters
        switch (operation) {
            case 'add':
                // Using Template Literals to combine variables and text strings smoothly
                result = `${number1} + ${number2} = ${number1 + number2}`;
                break;
            case 'subtract':
                result = `${number1} - ${number2} = ${number1 - number2}`;
                break;
            case 'multiply':
                result = `${number1} × ${number2} = ${number1 * number2}`;
                break;
            case 'divide':
                // 4. Handle division by zero validation boundary conditions safely
                if (number2 === 0) {
                    result = 'Cannot divide by zero.';
                    resultDisplay.classList.add('error-msg');
                } else {
                    result = `${number1} ÷ ${number2} = ${number1 / number2}`;
                }
                break;
            default:
                result = 'Unknown operation requested.';
                resultDisplay.classList.add('error-msg');
        }
    }

    // 5. Update UI text strings state content safely using innerText
    resultDisplay.innerText = result;
}
