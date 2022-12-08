// document.addEventListener('DOMContentLoaded', () => {
//     const inputEmail = document.querySelector('input#email');
//     const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//     document.querySelector('form').addEventListener('submit', event => {
//         if (!(regex.test(inputEmail.value))) {
//             inputEmail.closest('.form-group').classList.add('err');
//         }
//     })
// })

const form = document.querySelector('form');
const emailForm = document.querySelector('input');
const emailError = document.querySelector('input + span.error');
const errorIcon = document.querySelector('span.error-icon');
const submitButton = document.querySelector('button');

// Reset input if input is valid
// emailForm.addEventListener('input', (event) => {
//     if (emailForm.validity.valid) {
//         emailError.textContent = '';
//         emailError.className = 'error';
//         errorIcon.innerHTML = '';
//     } else {
//         showError();
//     }
// });

// Show error message if input is invalid
form.addEventListener('submit', (event) => {
    if (!emailForm.validity.valid) {
        // showError();
        validateEmail();
        event.preventDefault();
    }
});

// Error message if input is blank
function showError() {  
    if (emailForm.validity.valueMissing) {
        emailError.textContent = 'Please provide a valid email';
        errorIcon.innerHTML = '<img src="./images/icon-error.svg" alt="error-icon">';
    }
};

// Error message if email format is incorrect
function validateEmail(input) {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
        alert('Valid email address!');
        return true;
    } else {
        alert('Invalid email address!');
        return false;
    }
};

// Padding between input and error message
emailError.className = 'error active';