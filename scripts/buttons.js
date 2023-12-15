document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM is fully loaded.');

    const currentPage = window.location.pathname;

    const menuItems = document.querySelectorAll('.nav-section a');

    menuItems.forEach(function (menuItem) {
        const menuItemPath = menuItem.getAttribute('href');

        if (currentPage === menuItemPath) {
            menuItem.classList.add('active');
        }
    });

    const registerButton = document.getElementById('registerButton');
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');
    const languageButton = document.getElementById('languageButton');
    const bookingButton = document.getElementById('bookingButton');
    const sakhalinButton = document.getElementById('sakhalinButton');
    const questsButton = document.getElementById('questsButton');
    const coursesButton = document.getElementById('coursesButton');
    const loginMessage = document.getElementById('loginMessage');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const profileButton = document.getElementById('profileButton');

    console.log('Buttons and elements retrieved:', registerButton, loginButton, languageButton, bookingButton, sakhalinButton, questsButton, coursesButton, loginMessage, loginForm);

    profileButton.addEventListener('click', function () {
        console.log('Register button clicked.');
        window.location.href = 'profile_page.html'; 
    });

    registerButton.addEventListener('click', function () {
        console.log('Register button clicked.');
        window.location.href = 'signup_page.html'; 
    });

    registerButton.addEventListener('click', function () {
        console.log('Register button clicked.');
        window.location.href = 'signup_page.html'; 
    });

    loginButton.addEventListener('click', function () {
        console.log('Login button clicked.');
        window.location.href = 'login_page.html'; 
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
        if (username === 'example' && password === 'password') {
            loginMessage.textContent = 'Login successful!';
            loginMessage.style.color = 'green';
    
            setTimeout(function () {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            loginMessage.textContent = 'Invalid username or password. Please try again.';
            loginMessage.style.color = 'red';
        }
    });

    signupButton.addEventListener('click', function () {
        console.log('Signup button clicked.');

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    });

    languageButton.addEventListener('click', function () {
        console.log('Language button clicked.');
        // логика изменения языка будет когда-нибудь позже
    });

    bookingButton.addEventListener('click', function () {
        console.log('Booking button clicked.');
        // логика бронирования также будет позже
    });

    sakhalinButton.addEventListener('click', function () {
        console.log('Sakhalin button clicked.');
        window.location.href = 'sahalin_page.html';
    });

    questsButton.addEventListener('click', function () {
        console.log('Quests button clicked.');
        window.location.href = 'japan_page.html'; 
    });

    coursesButton.addEventListener('click', function () {
        console.log('Login button clicked.');
        window.location.href = 'login_page.html';
    });

});
