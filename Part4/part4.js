function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;

    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        document.getElementById('result').innerHTML = "Please enter valid positive numbers.";
    } else {
        switch (operation) {
            case 'add':
                document.getElementById('result').innerHTML = "Result: " + (num1 + num2);
                break;
            case 'subtract':
                document.getElementById('result').innerHTML = "Result: " + (num1 - num2);
                break;
            case 'multiply':
                document.getElementById('result').innerHTML = "Result: " + (num1 * num2);
                break;
            case 'divide':
                if (num2 === 0) {
                    document.getElementById('result').innerHTML = "Error: Cannot divide by zero.";
                } else {
                    document.getElementById('result').innerHTML = "Result: " + (num1 / num2);
                }
                break;
            default:
                document.getElementById('result').innerHTML = "Please select a valid operation.";
        }
    }
}