function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;

    let message = document.getElementById("message");

    if (name === "") {
        message.innerText = "Name cannot be empty";
        return;
    }

    if (age < 18 || age > 60) {
        message.innerText = "Age must be between 18 and 60";
        return;
    }

    if (!email.includes("@")) {
        message.innerText = "Email must contain @";
        return;
    }

    if (password.length < 6) {
        message.innerText = "Password must be at least 6 characters";
        return;
    }

    if (confirm("Are you sure you want to submit?")) {
        message.style.color = "green";
        message.innerText = "Registration Successful!";
        alert("Welcome " + name + " 🎉");
    }
}
