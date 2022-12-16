const formBtn = document.querySelector('.form-button');
const emailInput = document.querySelector('#email');

formBtn.addEventListener('click', e => {
    if (emailInput.value < 1) {
        document.querySelector('.container-form-input input').style.border = '1px solid hsl(0, 93%, 68%)';
        document.querySelector('.img-error').style.display = 'flex';
        document.querySelector('.error-message').style.display = 'flex';
        document.querySelector('.error-message').innerHTML = 'The field cannot be empty.';
    }
    else {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regex.test(emailInput.value.toLowerCase()) == false) {
            document.querySelector('.container-form-input input').style.border = '1px solid hsl(0, 93%, 68%)';
            document.querySelector('.img-error').style.display = 'flex';
            document.querySelector('.error-message').style.display = 'flex';
            document.querySelector('.error-message').innerHTML = 'Invalid email format.';
        }
    }
})