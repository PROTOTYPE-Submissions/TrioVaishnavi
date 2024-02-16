function submitForm(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // TODO: Send data to the server for registration
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);

}
