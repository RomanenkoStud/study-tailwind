import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { 
    faUserAlt, 
    faLock, 
    faInfoCircle, 
    faCheck, 
    faTimes, 
    faEye,
    faEyeSlash,
    faGlobe,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

// Add the Font Awesome icons to the library
library.add(
    faUserAlt, 
    faLock, 
    faInfoCircle, 
    faCheck, 
    faTimes, 
    faEye,
    faEyeSlash,
    faGlobe,
    faSignOutAlt,
);
// Enable icon substitution and dynamic loading
dom.watch();

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailStatus = document.getElementById('email-status');
const togglePassword = document.getElementById('toggle-password');
const loginForm = document.getElementById('login-form');
const submitButton = document.getElementById('submit-button');
const formTitle = document.getElementById('form-title');

const updateStatus = (valid, status) => {
    status.classList.toggle('text-customGreen', valid);
    status.classList.toggle('text-customRed', !valid);
    status.querySelector('svg').classList.toggle('fa-check', valid);
    status.querySelector('svg').classList.toggle('fa-times', !valid);
}

emailInput.addEventListener('input', () => {
    const inputLength = emailInput.value.length;
    const isEmailVerified = emailInput.checkValidity();
    emailInput.classList.toggle('non-empty', inputLength > 0);

    updateStatus(isEmailVerified, emailStatus);
    emailInput.classList.remove('verification-failed');
});

passwordInput.addEventListener('input', () => {
    const inputLength = passwordInput.value.length;
    passwordInput.classList.toggle('non-empty', inputLength > 0);
});

togglePassword.addEventListener('click', () => {
    const currentType = passwordInput.getAttribute('type');
    passwordInput.setAttribute('type', currentType === 'password' ? 'text' : 'password');
    togglePassword.querySelector('svg').classList.toggle('fa-eye-slash');
    togglePassword.querySelector('svg').classList.toggle('fa-eye');
});

loginForm.addEventListener('input', (event) => {
    formTitle.textContent = "Welcome";
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value; // Replace with the email you want to validate

    // Define the Firebase Function URL
    const functionUrl = 
        'https://us-central1-email-validation-2069.cloudfunctions.net/validateEmail';

    // Define the request body
    const requestBody = {
        email: email,
    };

    submitButton.textContent = 'Loading';
    submitButton.classList.remove('error');
    submitButton.classList.add('loading');

    // Make a POST request to the Firebase Function
    fetch(functionUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Email validation failed');
            }
            return response.json();
        })
        .then((data) => {
            submitButton.textContent = 'Login';
            submitButton.classList.remove('loading');
            alert(`Welcome, ${email}`);
        })
        .catch((error) => {
            updateStatus(false, emailStatus)
            formTitle.textContent = "Oops!";
            emailInput.classList.add('verification-failed');
            submitButton.textContent = 'Retry';
            submitButton.classList.remove('loading');
            submitButton.classList.add('error');
        });
});
