import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { 
    faUserAlt, 
    faLock, 
    faInfoCircle, 
    faCheck, 
    faTimes, 
    faEye,
    faEyeSlash
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faUserAlt, 
    faLock, 
    faInfoCircle, 
    faCheck, 
    faTimes, 
    faEye,
    faEyeSlash
);
dom.watch();

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailProgress = document.getElementById('email-progress');
const passwordProgress = document.getElementById('password-progress');
const emailStatus = document.getElementById('email-status');
const togglePassword = document.getElementById('toggle-password');
const loginForm = document.getElementById('login-form');

const updateProgress = (valid, inputLength, progress) => {
    if(inputLength > 0) {
        progress.style.width = valid ? '100%' : '50%';
    } else {
        progress.style.width = '0';
    }
    progress.classList.toggle('bg-customGreen', valid);
    progress.classList.toggle('bg-customRed', !valid);
}

const updateStatus = (valid, status) => {
    status.classList.toggle('text-customGreen', valid);
    status.classList.toggle('text-customRed', !valid);
    status.querySelector('svg').classList.toggle('fa-check', valid);
    status.querySelector('svg').classList.toggle('fa-times', !valid);
}

emailInput.addEventListener('input', () => {
    const valid = emailInput.checkValidity();
    const inputLength = emailInput.value.length;
    updateProgress(valid, inputLength, emailProgress);
});

passwordInput.addEventListener('input', () => {
    const valid = passwordInput.checkValidity();
    const inputLength = passwordInput.value.length;
    updateProgress(valid, inputLength, passwordProgress);
});

togglePassword.addEventListener('click', () => {
    const currentType = passwordInput.getAttribute('type');
    passwordInput.setAttribute('type', currentType === 'password' ? 'text' : 'password');
    togglePassword.querySelector('svg').classList.toggle('fa-eye-slash');
    togglePassword.querySelector('svg').classList.toggle('fa-eye');
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    updateStatus(true, emailStatus);
});
