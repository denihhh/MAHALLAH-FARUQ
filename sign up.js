function validateForm() {
    // Get form input values
    var fullname = document.getElementById('fullname').value;
    var matricNo = document.getElementById('matricNo').value;
    var phoneNo = document.getElementById('phoneNo').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
   

    // Perform validation
    if (fullname.trim() === '' || matricNo.trim() === '' || phoneNo.trim() === '' ||
        email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields');
        return false;
    }

    // Redirect to congrats.html
    window.location.href = 'congrats.html';

    return false; // Prevent form submission
}
