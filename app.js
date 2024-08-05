// Function to calculate the share of the bill
function calculateShare() {
    // Get the input values from the form
    const totalBill = parseFloat(document.getElementById('totalBill').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const numberOfFriends = parseInt(document.getElementById('numberOfFriends').value);

    // Validate the inputs
    if (isNaN(totalBill) || isNaN(tipPercentage) || isNaN(numberOfFriends) || totalBill <= 0 || tipPercentage < 0 || numberOfFriends <= 0) {
        document.getElementById('result').textContent = 'Please enter valid inputs.';
        return;
    }

    // Calculate the total amount including tip
    const totalWithTip = totalBill + (totalBill * (tipPercentage / 100));

    // Calculate the share per person
    const sharePerPerson = totalWithTip / numberOfFriends;

    // Display the result
    document.getElementById('result').textContent = `Each person should pay: $${sharePerPerson.toFixed(2)}`;
}
// Explanation of HTML
// Document Type Declaration (<!DOCTYPE html>):

// Declares the document to be HTML5.
// HTML Element (<html lang="en">):

// The root element of the HTML document with a language attribute set to English.
// Head Element (<head>):

// Contains meta-information about the HTML document.
// <meta charset="UTF-8">: Sets the character encoding for the document to UTF-8.
// <meta name="viewport" content="width=device-width, initial-scale=1.0">: Ensures the webpage is responsive and sets the viewport to match the device's width.
// <title>Split Hotel Bill</title>: Sets the title of the webpage, which appears in the browser's title bar or tab.
// Body Element (<body>):

// Contains the content of the HTML document.
// <h1>Split Hotel Bill</h1>: A heading for the page.
// <form id="billForm">: A form element with an ID of billForm.
// <label for="totalBill">Total Bill Amount ($):</label>: A label for the total bill amount input.
// <input type="number" id="totalBill" required>: An input field for the total bill amount, requiring a numeric value.
// <label for="tipPercentage">Tip Percentage (%):</label>: A label for the tip percentage input.
// <input type="number" id="tipPercentage" required>: An input field for the tip percentage, requiring a numeric value.
// <label for="numberOfFriends">Number of Friends:</label>: A label for the number of friends input.
// <input type="number" id="numberOfFriends" required>: An input field for the number of friends, requiring a numeric value.
// <button type="button" onclick="calculateShare()">Calculate Share</button>: A button that triggers the calculateShare function when clicked.
// <h2 id="result"></h2>: An element to display the calculation result.
// Script Element (<script src="app.js"></script>):

// Includes an external JavaScript file (app.js) which contains the script to handle the bill calculation.
// Explanation of JavaScript
// Function Declaration (calculateShare):

// Defines a function named calculateShare to handle the bill calculation logic when the button is clicked.
// Getting Input Values:

// Uses document.getElementById to retrieve the values from the input fields and converts them to appropriate numeric types:
// totalBill: Converted to a floating-point number using parseFloat.
// tipPercentage: Converted to a floating-point number using parseFloat.
// numberOfFriends: Converted to an integer using parseInt.
// Input Validation:

// Checks if the inputs are valid numbers and meet the expected criteria:
// Ensures totalBill and numberOfFriends are greater than 0.
// Ensures tipPercentage is non-negative.
// If any condition is not met, it sets the result text to inform the user of invalid inputs and exits the function.
// Calculate Total Amount Including Tip:

// Computes the total amount including the tip by adding the tip to the total bill amount. The tip is calculated as a percentage of the total bill (totalBill * (tipPercentage / 100)).
// Calculate Share Per Person:

// Computes the share per person by dividing the total amount (including tip) by the number of friends.
// Display the Result:

// Updates the textContent of the HTML element with the id result to display the share per person. The amount is formatted to two decimal places using toFixed(2) for readability.
// How They Work Together
// When the user fills out the form and clicks the "Calculate Share" button, the calculateShare function in app.js is triggered.
// The function retrieves the input values, validates them, performs the necessary calculations, and displays the result in the designated HTML element.
// The HTML structure provides the user interface, while the JavaScript code handles the logic and interaction.







