const input = document.getElementById("email-input");

const submit = document.getElementById("submit-button");
const error = document.getElementById("error-text");
const success = document.getElementById("success-text");
const iconError = document.getElementById("icon-error");

function customValidation() {
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

customValidation();