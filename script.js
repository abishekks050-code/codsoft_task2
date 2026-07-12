document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".register-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullName = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const password = form.querySelectorAll('input[type="password"]')[0].value;
        const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value;

        if (fullName === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Please fill all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Save user data in browser
        const user = {
            fullName: fullName,
            email: email,
            password: password
        };

        localStorage.setItem("quizUser", JSON.stringify(user));

        alert("Registration Successful!");

        // Go to login page
        window.location.href = "index.html";
    });

});