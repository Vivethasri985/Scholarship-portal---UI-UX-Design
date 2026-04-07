
# Online Scholarship Application Portal

A front-end web application developed for a **UID project** to simplify the scholarship application process for students and administrators. This project allows users to create an account, log in, submit a scholarship application, and track its status. It also provides an admin dashboard to review submitted applications and update their status.

## Overview

The **Online Scholarship Application Portal** is designed to simulate a scholarship management system for educational institutions. It provides a simple and user-friendly interface for students to register, apply for scholarships, and check their application progress. On the admin side, the portal allows viewing all submitted applications and changing their review status.

This project is built using:

- **HTML**
- **CSS**
- **JavaScript**

The application uses **browser localStorage** for storing account details, login data, and scholarship applications, making it suitable for demonstration and academic purposes.

## Features

### Student Module
- User sign-up using **email or mobile number**
- OTP-based demo verification during registration
- Username and password creation with validation
- Secure login using saved account credentials
- Scholarship application form submission
- Upload support for form files/documents using browser storage
- Automatic application ID generation
- Application status tracking

### Admin Module
- Separate admin login page
- View all submitted applications in a dashboard
- Review applicant details
- Change application status to:
  - Submitted
  - Under Review
  - Approved
  - Rejected
- Open student status view
- View submitted application form details

## Project Structure

```bash
UID_PRJ/
│── index.html
│── signup.html
│── signup-details.html
│── account-created.html
│── login.html
│── application.html
│── confirmation.html
│── status.html
│── admin-login.html
│── admin-dashboard.html
│── view-application.html
│── auth-style.css
│── portal-style.css
│── login.js
│── signup.js
│── signup-step1.js
│── signup-step2.js
│── portal-script.js
│── amrita-logo.png
│── campus-bg.jpg
