// const emailInput = document.getElementById('email');
// const emailError = document.getElementById('error');
// const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


// const myForm = document.getElementById('main-form');


// myForm.addEventListener('submit', function handleSubmit(event) {
//     event.preventDefault();
//     const email = emailInput.value.trim();
//     if (emailPattern.test(email)) {
//         emailError.textContent = '';
//         return true;
//     } else {
//         emailError.textContent = 'Please enter a valid email address';
//         return false;
//     }
// })



const emailInput = document.getElementById('email');
const emailError = document.getElementById('error');
const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

function validateEmail() {
    const email = emailInput.value.trim();
    if (emailPattern.test(email)) {
        emailError.textContent = '';
        return true;
    } else {
        emailError.textContent = 'Please enter a valid email address';
        return false;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    if (validateEmail()) {
        // submit the form or do something else here
    }
}

const myForm = document.getElementById('main-form');
myForm.addEventListener('submit', handleSubmit);
