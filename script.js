// Fetch navbar HTML and insert it into the page
fetch('../HTML-pages/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-loaded').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));