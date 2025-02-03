const calculateButton = document.getElementById('calculateButton');
const clearButton = document.getElementById('clearButton');
const result = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const numberInput = parseInt(document.getElementById('numberInput').value);
    
    if (isNaN(numberInput) || numberInput < 0) {
        result.textContent = 'Please enter a valid non-negative integer!';
    } else {
        result.textContent = `Factorial of ${numberInput} is: ${factorial(numberInput)}`;
    }
});

clearButton.addEventListener('click', () => {
    document.getElementById('numberInput').value = '';
    result.textContent = '';
});

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
