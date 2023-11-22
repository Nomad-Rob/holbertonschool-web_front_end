# Cookies & Local Storage Project

## Overview
This project, led by Johann Kerbrat, Engineering Manager at Uber Works, focuses on understanding and manipulating cookies and local storage in web development using JavaScript. It's a hands-on project designed for web developers to learn key concepts and apply them in practical scenarios.

## Learning Objectives
- Creating cookies using JavaScript.
- Setting specific settings for cookies.
- Reading cookies with JavaScript.
- Utilizing js-cookie for easy cookie manipulation.
- Using browser web storage effectively.
- Understanding the differences between local storage and session storage.

## Requirements
- Use editors like vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- Include a README.md file at the root of the project folder.
- Code should use the `.js` extension.
- Code execution on Ubuntu 18.04 using Node 12.x and npm 6.x.
- `src/index.js` should remain empty - JavaScript should be within `<script>` tags in HTML.

## Setup
- Install `webpack-dev-server`: `npm install webpack-dev-server --save-dev`.
- Create an empty `src/index.js`.
- Run the server with `node_modules/.bin/webpack-dev-server`.

## Tasks

### Task 0: Create Basic Cookie
- Create `0-index.html` with two text inputs (`firstname` and `email`), and two buttons to set and show cookies.
- Implement `setCookies` and `showCookies` functions.

### Task 1: Create Cookie with Expiration Date and Specific Path
- Modify `1-index.html` to set cookies to expire in 10 days.

### Task 2: Read Cookie
- Implement `getCookie` function in `2-index.html` to return the value of a specified cookie.
- Modify `showCookies` to display specific cookie values.

### Task 3: Delete Cookie and Mini Application
- Add a login form and implement functions like `showForm`, `hideForm`, `deleteCookiesAndShowForm`, and `showWelcomeMessageOrForm` in `3-index.html`.

### Task 4: Use js-cookie
- Integrate js-cookie in `4-index.html` for cookie manipulation.
- Replace existing cookie functions with js-cookie equivalents.

### Task 5: Local Storage
- Implement a basic shopping cart in `5-index.html` using local storage.
- Include functions like `addItemToCart`, `createStore`, and `displayCart`.

### Task 6: Session Storage
- Modify `6-index.html` to use session storage instead of local storage for the shopping cart.

### Task 7: Advanced Use of Web Storage
- Develop a more advanced cart system using session storage in `7-index.html`.
- Implement functions for cart manipulation and display.

## Additional Information
- Follow the specified requirements for each task.
- Ensure that JavaScript is used for all DOM and web storage operations.

## Repository
GitHub repository: holbertonschool-web_front_end
Directory: Cookies_local_storage
Files: `package.json`, `src/index.js`, `0-index.html` to `7-index.html`

---
