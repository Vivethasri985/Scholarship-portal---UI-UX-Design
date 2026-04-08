document.getElementById("sendOtpBtn").addEventListener("click", function () {
    let email = document.getElementById("signupEmail").value.trim();
    let phone = document.getElementById("signupPhone").value.trim();
    let countryCode = "+91";

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[6-9][0-9]{9}$/;

    if (email === "" && phone === "") {
        alert("Enter either email or phone number.");
        return;
    }

    if (email !== "" && phone !== "") {
        alert("Please enter either email or phone number, not both.");
        return;
    }

    if (email !== "" && !emailPattern.test(email)) {
        alert("Enter a valid email address.");
        return;
    }

    if (phone !== "" && !phonePattern.test(phone)) {
        alert("Enter a valid mobile number.");
        return;
    }

    let accounts = JSON.parse(localStorage.getItem("portalAccounts")) || [];

    let emailExists = accounts.some(function(account){
        return email && account.email === email;
    });

    let phoneExists = accounts.some(function(account){
        return phone && account.phone === phone;
    });

    if(emailExists){
        alert("This email is already registered.");
        return;
    }

    if(phoneExists){
        alert("This phone number is already registered.");
        return;
    }

    let generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    
    if (phone !== "") {
        localStorage.setItem("signupCountryCode", countryCode);
        localStorage.setItem("signupPhone", phone);
        localStorage.setItem("fullSignupPhone", countryCode + " " + phone);
    } else {
        localStorage.removeItem("signupCountryCode");
        localStorage.removeItem("signupPhone");
        localStorage.removeItem("fullSignupPhone");
    }

    localStorage.setItem("tempOtp", generatedOtp);
    localStorage.setItem("signupEmail", email);
    localStorage.setItem("signupPhone", phone);
    alert("Demo OTP: " + generatedOtp);

    window.location.href = "signup-details.html";
});