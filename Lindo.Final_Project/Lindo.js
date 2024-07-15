document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Smooth scroll
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            menu.classList.remove('active');
        });
    });
});

function validateForm() {
    let isValid = true;
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Clear previous errors
    document.getElementById('name-error').style.display = 'none';
    document.getElementById('email-error').style.display = 'none';
    document.getElementById('message-error').style.display = 'none';

    // Name validation
    if (name.value.trim() === '') {
        document.getElementById('name-error').textContent = 'Name is required.';
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        document.getElementById('email-error').textContent = 'Enter a valid email address.';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }

    // Message validation (optional)
    if (message.value.trim() === '') {
        document.getElementById('message-error').textContent = 'Message is required.';
        document.getElementById('message-error').style.display = 'block';
        isValid = false;
    }

    return isValid;
}
