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
            // Show notification
            showNotification('Login Successful', 'Welcome back, ' + username + '!');
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 2000);
        } else {
            // Authentication failed
            document.getElementById('signinMessage').innerText = 'Login failed. Incorrect username or password.';
        }
    } else {
        // No users found in localStorage
        document.getElementById('signinMessage').innerText = 'No user data found. Please sign up first.';
    }
});

function showNotification(title, message) {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support system notifications");
    } else if (Notification.permission === "granted") { // Check if permission is already granted
        // If it's okay let's create a notification
        new Notification(title, { body: message });
    } else if (Notification.permission !== 'denied') { // Otherwise, we need to ask for permission
        Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                new Notification(title, { body: message });
            }
        });
    }
}
