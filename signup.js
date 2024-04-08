// Load users array from local storage on page load
var users = JSON.parse(localStorage.getItem('users')) || [];

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent form submission from reloading the page
    
    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Create an object to represent the user
    var user = {
        username: username,
        password: password
    };
    
    // Push the user object into the users array
    users.push(user);
    
    // Save updated users array to local storage
    localStorage.setItem('users', JSON.stringify(users));
    
    // Clear the form fields after submission (optional)
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    
    // Display a message or perform any other actions as needed
    document.getElementById('signupMessage').innerText = 'Sign up successful!';
    alert('Sign up Successful!');
    // setTimeout(function() {
    //     window.location.href = 'index.html';
    // }, 1000);

    
    
    // For demonstration purposes, log the users array
    console.log(users);
}

// Add event listener to the form for form submission
document.getElementById('signupForm').addEventListener('submit', handleFormSubmission);
