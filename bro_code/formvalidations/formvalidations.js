document.getElementById('button').addEventListener('click', () => {
    // Trim inputs to avoid errors caused by extra spaces
    const username = document.getElementById('username').value.trim(); // Corrected to 'username'
    const password = document.getElementById('password').value.trim(); // Corrected to 'password'

    // Validate email (username)
    if (username === '') {
        window.alert('Email should not be empty.');
        return;
    }

    const usernameValidations = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!usernameValidations.test(username)) {
        window.alert('Invalid email format.');
        return;
    }

    // Validate password
    if (password === '') {
        window.alert('Password should not be empty.');
        return;
    }

    const passwordValidations = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[$%@#&])(?=.*[\d])[A-Za-z\d$@%&*?]{8,}$/;
    if (!passwordValidations.test(password)) {
        window.alert('Invalid password pattern. Password must contain:\n' +
            '- At least one uppercase letter.\n' +
            '- At least one lowercase letter.\n' +
            '- At least one special character ($%@#&).\n' +
            '- At least one number.\n' +
            '- Minimum 8 characters.');
        return;
    }

    // Success message if both email and password are valid
    window.alert('Valid email and password.');
});
