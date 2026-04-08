let usernameSuggestions = document.getElementById("usernameSuggestions");

let savedLoginUsernames = JSON.parse(localStorage.getItem("loginUsernameHistory")) || [];

savedLoginUsernames.forEach(function (name) {
    let option = document.createElement("option");
    option.value = name;
    usernameSuggestions.appendChild(option);
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let username = document.getElementById("loginUsername").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    let accounts = JSON.parse(localStorage.getItem("portalAccounts")) || [];

    let matchedAccount = accounts.find(function (account) {
        return account.username === username && account.password === password;
    });

    if (!matchedAccount) {
        alert("Invalid username or password.");
        return;
    }

    let loginUsernameHistory = JSON.parse(localStorage.getItem("loginUsernameHistory")) || [];

    if (!loginUsernameHistory.includes(username)) {
        loginUsernameHistory.push(username);
        localStorage.setItem("loginUsernameHistory", JSON.stringify(loginUsernameHistory));
    }

    localStorage.setItem("currentLoggedInUser", username);

    window.location.href = "application.html";
});