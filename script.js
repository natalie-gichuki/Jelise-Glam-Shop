// Fetch navbar HTML and insert it into the page
fetch('./navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-loaded').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));



// Product search and filter functionality
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const productListGrid = document.querySelector('.product-list-grid');
const products = productListGrid ? Array.from(productListGrid.getElementsByClassName('product-card')) : [];
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    products.forEach(product => {
        const name = product.getAttribute('data-name').toLowerCase().replace(/-/g, ' ');
        const category = product.getAttribute('data-category');

        const matchesSearch = name.includes(searchTerm);
        const matchesCategory = selectedCategory === 'All-categories' || category === selectedCategory;

        if (matchesSearch && matchesCategory) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    })
}

if (searchInput && categoryFilter) {
    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
}


// Form validation
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username')?.value.trim() || '';
        if (!username) {
            Swal.fire({
                icon: 'error',
                title: 'Oops :(',
                text: 'Username cannot be empty!'
            })
            return;
        }

        const email = document.getElementById('email')?.value.trim() || '';
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops :(',
                text: 'Please enter a valid email address!'
            })
            return;
        }

        const password = document.getElementById('password')?.value || '';
        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops :(',
                text: 'Password must be at least 6 characters long!'
            })
            return;
        }

        const confirmPassword = document.getElementById('confirm-password')?.value || '';
        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops :(',
                text: 'Passwords do not match!'
            })
            return;
        }

        setCookie('jg_username', username, 7);
        setCookie('jg_registered', 'true', 7);


        Swal.fire({
            icon: 'success',
            title: 'Registration Successful!',
            text: `Welcome to Jelise Glam Shop, ${username}!`
        });

        //clear form fields
        registerForm.reset();
        resetCookieConsent();
    });
}

// Cookie implementation 

// Declare a function setCookie that takes three parameters: name(cookie name), value(name value-Natalie), and days(days cookie should last)
function setCookie(name, value, days) {
    // Stores cookie expiration date
    let expires = "";
    // Chceck if days parameter is provided
    if (days) {
        // Retrieve current date and time
        const date = new Date();
        // date.getTime() returns the number of milliseconds since January 1, 1970
        // Add the number of days converted to milliseconds to the current time
        // date.setTime() updates date by adding the calculated milliseconds
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

        // Convert the expiration date to UTC string format and set it to expires variable
        expires = "; expires=" + date.toUTCString();
    }

    // Set the cookie by assigning a string to document.cookie
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

// Declare a function getCookie that takes one parameter: name(cookie name)
function getCookie(name) {
    // Split the document.cookie string into an array of individual cookies using ";" as the delimiter
    let cookieArr = document.cookie.split(";");
    // Loop through the array of cookies
    for (let i = 0; i < cookieArr.length; i++) {
        // Trim any leading or trailing whitespace from the cookie string and store it in cookiePair variable
        let cookiePair = cookieArr[i].trim();
        // Check if the cookie string starts with the specified name followed by an "=" character
        if (cookiePair.startsWith(name + "=")) {
            // If a match is found, decode the value of the cookie using decodeURIComponent and return it
            return decodeURIComponent(cookiePair.substring(name.length + 1));
        }
    }
    // If no matching cookie is found, return null
    return null;
}

function acceptCookies() {
    setCookie('cookies_accepted', 'true', 7);
    document.getElementById('cookieNotice').style.display = 'none';
}

function rejectCookies() {
    setCookie('cookies_accepted', 'false', 7);
    document.getElementById('cookieNotice').style.display = 'none';
}

// Check cookie consent on page load
window.onload = function () {
    // Call the getCookie function to check if the user has already given consent for cookies

    // If the consent variable is null (indicating that the user has not given consent), display the cookie notice by setting its display style to "block"
    const cookieNotice = document.getElementById("cookieNotice");
    if (cookieNotice) {
        const consent = getCookie('cookies_accepted');
        if (consent === null) {
            cookieNotice.style.display = 'block';
        } else {
            cookieNotice.style.display = 'none';
        }
    }
};


function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function resetCookieConsent() {
    deleteCookie("cookies_accepted");
    const cookieNotice = document.getElementById("cookieNotice");
    if (cookieNotice) {
        cookieNotice.style.display = "block";
    }
}


