// Fetch navbar HTML and insert it into the page
fetch('../HTML-pages/navbar.html')
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
