const form = document.getElementById('credentials');

// Add an event listener to the form's submit event
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create a FormData object from the form
    const formData = new FormData(form);

    let first = formData.get("first");
    let last = formData.get("last");
    let phone = formData.get("phone");
    let email = formData.get("email");
    let dob = formData.get("dob");

    // Alert the user that something happened
    alert("Info retrieved.");

    // Do something with the userName variable
    console.log('User name:', first, last);
    console.log("Phone Number:", phone);
    console.log("Email Address", email);
    console.log("Date of Birth:", dob);

    // Reset the form if needed
    form.reset();
});