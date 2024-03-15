document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the username and password from the sign-in form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Retrieve users array from localStorage
    var users = JSON.parse(localStorage.getItem('users'));

    // Check if users array exists and is not empty
    if (users && users.length > 0) {
        // Find the user in the users array
        var user = users.find(function(user) {
            return user.username === username && user.password === password;
        });

        if (user) {
            // Authentication successful
            document.getElementById('signinMessage').innerText = 'Login successful!';
        } else {
            // Authentication failed
            document.getElementById('signinMessage').innerText = 'Login failed. Incorrect username or password.';
        }
    } else {
        // No users found in localStorage
        document.getElementById('signinMessage').innerText = 'No user data found. Please sign up first.';
    }
});
