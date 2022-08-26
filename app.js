import { redirectIfLoggedIn, signUpUser } from './fetch-utils.js';

// import functions and grab DOM elements
const signUpForm = document.getElementById('sign-up-form');
// let state

// set event listeners
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    const data = await signUpUser({
        email: formData.get('email'),
        password: formData.get('password'),
        first_name: formData.get('firstName'),
        last_name: formData.get('lastName'),
    });
    console.log('app.js ------>', data);
});
// get user input
// use user input to update state
// update DOM to reflect the new state

redirectIfLoggedIn();
