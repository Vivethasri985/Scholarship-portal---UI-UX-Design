document.getElementById("signupStepTwoForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let enteredOtp = document.getElementById("signupOtp").value.trim();
    let username = document.getElementById("signupUsername").value.trim();
    let password = document.getElementById("signupPassword").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let savedOtp = localStorage.getItem("tempOtp");
    let email = localStorage.getItem("signupEmail") || "";
    let phone = localStorage.getItem("signupPhone") || "";

    let usernamePattern = /^.{6,}$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;

    if (!savedOtp) {
        alert("OTP not found. Please start sign-up again.");
        window.location.href = "signup.html";
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
        alert("Password must be at least 6 characters and include uppercase, lowercase, number, and special characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return;
    }

    let accounts = JSON.parse(localStorage.getItem("portalAccounts")) || [];

    let emailExists = accounts.some(function(account){
        return account.email === email;
    });

    let phoneExists = accounts.some(function(account){
        return account.phone === phone;
    });

    if(emailExists){
        alert("This email is already registered.");
        return;
    }

    if(phoneExists){
        alert("This phone number is already registered.");
        return;
    }

    let usernameExists = accounts.some(function (account) {
        return account.username === username;
    });

    if (usernameExists) {
        alert("Username already exists. Please choose a different username.");
        return;
    }


    accounts.push({
        username: username,
        password: password,
        email: email,
        phone: phone
    });

    localStorage.setItem("portalAccounts", JSON.stringify(accounts));

    localStorage.removeItem("tempOtp");

    window.location.href = "account-created.html";
});