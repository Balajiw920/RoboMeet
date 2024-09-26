document.querySelectorAll('.signup-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default action
        alert("Sign Up for Free button clicked!"); // Replace with your desired action
        // You can redirect to a signup page like this:
        // window.location.href = 'signup.html';
    });
});