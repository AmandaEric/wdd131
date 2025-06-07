function isCardNumberValid(number) {
  // Simulate a real card check by only accepting one number for now.
  return number === '1234123412341234';
}

function displayError(msg) {
  // Display error message.
  document.querySelector('.errorMsg').innerHTML = msg;
}

function submitHandler(event) {
  event.preventDefault();  // Stop the default form submission.

  let errorMsg = '';
  displayError('');  // Clear any previous errors.

  // Check that the card number is a number.
  if (isNaN(this.cardNumber.value)) {
    errorMsg += 'Card number is not a valid number\n';
  } 
  // Check that it matches our simple valid number.
  else if (!isCardNumberValid(this.cardNumber.value)) {
    errorMsg += 'Card number is not a valid card number\n';
  }

  // Display any errors.
  if (errorMsg !== '') {
    displayError(errorMsg);
    return false;
  }

  // If no errors, allow the form submission to proceed (you could also handle success here).
  return true;
}

// Attach submit event listener to the form.
document.querySelector('#credit-card').addEventListener('submit', submitHandler);
