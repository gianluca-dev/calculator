// Declare variables for user input, display output, and input buffer
let input = '';
let displayInput = '';
let inputBuffer = '';

const container = document.getElementById('key-container');
// Add event listener to button container, detecting clicks on calculator buttons
container.addEventListener('click', (event) => {
    const key = event.target;
    if (key.classList.contains('key')) {
        // Process the clicked button's input
        getInput(key.textContent);
    }
});
// Function to handle button input for both display and calculation logic
function getInput(key) {
    // Update display with the entered key
    displayInput += key;
    // Convert special characters for proper calculation
    if (key === '×') {
        input += '*';
    } else if (key === '÷') {
        input += '/';
    } else {
        // Append other valid input characters
        input += key;
    }
    // Update display element
    document.getElementById('display').innerText = displayInput;
}

document.getElementById('equation').addEventListener('click', calculate);
// Function to perform calculations based on user input
function calculate() {
    try {
        // Evaluate the mathematical expression and display the result
        let result = eval(input);
        document.getElementById('display').innerText = result;
        // Store the result for further calculations
        input = result.toString();
        displayInput = result.toString();
    } catch (error) {
        // Handle invalid input by showing an error message and resetting variables
        console.log('Invalid Input! ' + error);
        // Display "Error" on invalid input
        document.getElementById('display').innerText = 'Error';
        input = '';
        displayInput = '';
    }
}

document.getElementById('clear').addEventListener('click', clear);
// Function to clear all stored inputs and reset the display
function clear() {
    input = '';
    displayInput = '';
    document.getElementById('display').innerText = '';
}