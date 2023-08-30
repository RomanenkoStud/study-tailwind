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

const updateStatus = (valid, status) => {
    status.classList.toggle('text-customGreen', valid);
    status.classList.toggle('text-customRed', !valid);
    status.querySelector('svg').classList.toggle('fa-check', valid);
    status.querySelector('svg').classList.toggle('fa-times', !valid);
}

emailInput.addEventListener('input', () => {
    const inputLength = emailInput.value.length;
    emailInput.classList.toggle('non-empty', inputLength > 0);
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

loginForm.addEventListener("submit", (e) => {
    const isEmailVerified = true; 
    // This should be replaced email verification logic

    if (isEmailVerified) {
        // If email is verified, allow the form to be submitted
        return;
    } else {
        e.preventDefault();
        updateStatus(isEmailVerified, emailStatus);
    }
});
