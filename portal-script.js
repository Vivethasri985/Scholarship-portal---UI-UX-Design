document.addEventListener("DOMContentLoaded", function () {
    let currentUser = localStorage.getItem("currentLoggedInUser");

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    let allApplications = JSON.parse(localStorage.getItem("portalApplications")) || {};

    if (allApplications[currentUser]) {
        window.location.href = "status.html";
        return;
    }
});

document.getElementById("applicationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let phone = document.getElementById("contactNumber").value.trim();
    let error = document.getElementById("contactError");

    let phonePattern = /^[6-9][0-9]{9}$/;

    if (!phonePattern.test(phone)) {
        error.textContent = "Enter a valid Indian mobile number. It must be 10 digits and start with 6, 7, 8, or 9.";
        return;
    } else {
        error.textContent = "";
    }

    let currentUser = localStorage.getItem("currentLoggedInUser");

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    let allApplications = JSON.parse(localStorage.getItem("portalApplications")) || {};

    if (allApplications[currentUser]) {
        alert("You have already submitted an application.");
        window.location.href = "status.html";
        return;
    }

    let form = document.getElementById("applicationForm");
    let formData = new FormData(form);

    let applicationData = {};
    let fileReaders = [];

    formData.forEach(function(value, key){

        if(value instanceof File && value.size > 0){

            let reader = new FileReader();

            let promise = new Promise(function(resolve){

                reader.onload = function(e){
                    applicationData[key] = e.target.result;
                    resolve();
                };

            });

            reader.readAsDataURL(value);
            fileReaders.push(promise);

        }else{
            applicationData[key] = value;
        }

    });

    Promise.all(fileReaders).then(function(){

        let applicationId = "APP" + Math.floor(100000 + Math.random() * 900000);

        allApplications[currentUser] = {
            applicationId: applicationId,
            formData: applicationData,
            status: "Submitted"
        };

        localStorage.setItem("portalApplications", JSON.stringify(allApplications));

        window.location.href = "confirmation.html";

    });

});