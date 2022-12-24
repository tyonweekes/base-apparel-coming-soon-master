const input = document.getElementById("input");

const submit = document.getElementById("button");
const error = document.getElementById("error-text");
const success = document.getElementById("success-text");
const iconError = document.getElementById("icon-error");

function Init() {
    submit.addEventListener("click", function() {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(input.value.toLowerCase())) {
            error.style.display = "block";
            iconError.style.display = "block";
            success.style.display = "none";
            input.style.borderColor = "red";
        } else {
            input.style.borderColor = "hsl(0, 36%, 70%)";
            error.style.display = "none";
            iconError.style.display = "none";
            success.style.display = "block";
        }
        input.value = "";
    });
}

Init();

// const formBtn = document.querySelector('.form-button');
// const emailInput = document.querySelector('#email');

// formBtn.addEventListener('click', e => {
//     if (emailInput.value < 1) {
//         document.querySelector('.container-form-input input').style.border = '1px solid hsl(0, 93%, 68%)';
//         document.querySelector('.img-error').style.display = 'flex';
//         document.querySelector('.error-message').style.display = 'flex';
//         document.querySelector('.error-message').innerHTML = 'The field cannot be empty.';
//     }
//     else {
//         let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//         if (regex.test(emailInput.value.toLowerCase()) == false) {
//             document.querySelector('.container-form-input input').style.border = '1px solid hsl(0, 93%, 68%)';
//             document.querySelector('.img-error').style.display = 'flex';
//             document.querySelector('.error-message').style.display = 'flex';
//             document.querySelector('.error-message').innerHTML = 'Invalid email format.';
//         }
//     }
// })