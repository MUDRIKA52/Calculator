// script.js

// Get the display input element by its ID and store it in a variable
const display = document.getElementById('display');

// Function to add a value (number/operator) to the display
function appendValue(value) {
  display.value += value; // Add the clicked value to the current input
}

// Function to clear the entire display
function clearDisplay() {
  display.value = ''; // Set input value to empty string
}

// Function to delete the last character in the display
function deleteLast() {
  display.value = display.value.slice(0, -1); // Remove the last character
}

// Function to calculate the result using eval()
function calculate() {
  try {
    display.value = eval(display.value); // Evaluate the input expression
  } catch {
    display.value = 'Error'; // If invalid expression, show Error
  }
}
