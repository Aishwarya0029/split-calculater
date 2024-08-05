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
