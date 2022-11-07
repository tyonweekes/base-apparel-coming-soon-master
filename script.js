const form = document.querySelector('form');
const emailForm = document.querySelector('input');
const emailError = document.querySelector('input + span.error');
const errorIcon = document.querySelector('span.error-icon');
const submitButton = document.querySelector('button');

// Reset input if input is valid
emailForm.addEventListener('input', (event) => {
    if (emailForm.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
        errorIcon.innerHTML = '';
    } else {
        showError();
    }
});

// Show error message if input is invalid
form.addEventListener('submit', (event) => {
    if (!emailForm.validity.valid) {
        showError();
        event.preventDefault();
    }
});

// Error message
function showError() {
    if (emailForm.validity.valueMissing) {
        emailError.textContent = 'Please provide a valid email';
        errorIcon.innerHTML = '<img src="./images/icon-error.svg" alt="error-icon">';
    }
};

// Padding between input and error message
emailError.className = 'error active';