let generatedOtp = "";

document.getElementById("sendOtpBtn").addEventListener("click", function () {
    let email = document.getElementById("signupEmail").value.trim();
    let phone = document.getElementById("signupPhone").value.trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]{10}$/;

    if (email === "" && phone === "") {
        alert("Enter either email or phone number.");
        return;
    }

    if (email !== "" && !emailPattern.test(email)) {
        alert("Enter a valid email address with '@'.");
        return;
    }

    if (phone !== "" && !phonePattern.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem("tempOtp", generatedOtp);

    alert("Demo OTP: " + generatedOtp);
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("signupEmail").value.trim();
    let phone = document.getElementById("signupPhone").value.trim();
    let enteredOtp = document.getElementById("signupOtp").value.trim();
    let username = document.getElementById("signupUsername").value.trim();
    let password = document.getElementById("signupPassword").value.trim();

    let savedOtp = localStorage.getItem("tempOtp");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]{10}$/;
    let usernamePattern = /^.{6,}$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;

    if (email === "" && phone === "") {
        alert("Enter either email or phone number.");
        return;
    }

    if (email !== "" && !emailPattern.test(email)) {
        alert("Enter a valid email address with '@'.");
        return;
    }

    if (phone !== "" && !phonePattern.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    if (!savedOtp) {
        alert("Please send OTP first.");
        return;
    }

    if (enteredOtp !== savedOtp) {
        alert("Invalid OTP.");
        return;
    }

    if (!usernamePattern.test(username)) {
        alert("Username must be at least 6 characters.");
        return;
    }

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 6 characters and include uppercase, lowercase, number, and special character.");
        return;
    }

    localStorage.setItem("portalUsername", username);
    localStorage.setItem("portalPassword", password);
    localStorage.setItem("portalEmail", email);
    localStorage.setItem("portalPhone", phone);

    localStorage.removeItem("tempOtp");

    alert("Sign-Up successful. Please login with your new credentials.");
    window.location.href = "login.html";
});