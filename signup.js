// Initialize an empty array to store user information
window.users = [];

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the username and password from the sign-up form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Create a new user object
    var newUser = {
        username: username,
        password: password
    };

    // Push the new user object to the users array
    users.push(newUser);
    // Store users array in localStorage
    localStorage.setItem('users', JSON.stringify(users));


    // Optionally, you can store the users array in localStorage or a backend server for persistence

    // Reset the sign-up form fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

    // Display a success message
    document.getElementById('signupMessage').innerText = 'Sign up successful!';

    // Debug: Display the current state of the users array
    console.log('Users:', users);
});
