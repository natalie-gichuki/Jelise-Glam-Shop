*** JELISE GLAM SHOP - (ECOMMERCE SITE) ***


*** PROJECT OVERVIEW ***
- This project is a responsive frontend ecommerce site for an online beauty shop called Jelise Glam Shop.
- It allows users to: 
  ` 1. Browse products `
  ` 2. Filter products based on their names and categories `  
  ` 3. Register an account `

- This projects demonstrates use of *** HTML/CSS/JAVASCRIPT *** while observing privacy and ethical requirements within 
   Kenya's digital environment.

*** DESIGN CHOICES ***
` 1. LAYOUT & RESPONSIVENESS `
- The website uses a simple and clean layout to enhance usability. 
- CSS grids and flexible units were used to ensure responsiveness across desktops and mobile devices. 
- Product cards automatically adjust to different screen sizes, ensuring accessibility and clear viewing on all screen sizes

` 2. USER INTERFACE `
- Clear labels, placeholders and form validation messages were implemented to improve user experience
- SweetAlert2 was intergrated to provide friendly and informative feedback during form submission.

*** TECHNICAL IMPLEMENTATION ***
` 1. HTML ` - was used to structure pages like the homepage, product listing page, contact page and user registration form.

` 2. CSS ` - was used for styling, layout and responsiveness to improve visual attraction

` 3. JAVASCRIPT ` - This was used to : 
                    a. Validate user input 
                    b. Filter/search products
                    c. Set and read browser cookies for user  identification 
                    d. Ensure navbar is accessible in all pages

*** TESTING ***
` RESPONSIVENESS `
- Responsiveness was tested on both desktop and mobile devices using the chrome developer tools.

- On desktops the layout displays product cards in multiple columns while on mobile devices they are stacked on top of each other vertically to ease readability

- Forms and navigation elements wer confirmed to function correctly on different screen sizes

*** PRIVACY AND ETHICAL CONSIDERATIONS ***
` 1. DATA PROTECTION `
- The website follows the principles of the *** KENYA DATA PROTECTION ACT(2019) *** by collecting only necessary user information during registration. 

- Sensitive data like passwords are not stored in cookies or local storage

` 2. COOKIE USAGE `
- A minimal Javascript cookie is is used to identify returning users after registration. 

- The cookie stores only the username and registration status and expired after a defined period of 7 days.

- This alligns to *** ODPC GUIDELINES *** on data minimisation and transparency

` 3. USER SAFETY `
- Browser autofillis disabled on registration forms to prevent accidental exposure of personal data on shared or public devices. 

- Basic frontend validation helps reduce weak passwords and incorrect input supporting objectives of the *** COMPUTER MISUSE AND CYBERCRIMES ACT(2018) ***

` 4. COOKIE ACCEPTANCE `
- On page load, JavaScript checks whether a cookie consent value exists.
If none is found, a cookie notice is displayed requesting user consent.
The user’s choice is stored in a cookie with a limited lifespan in compliance
with the Kenya Data Protection Act (2019) and ODPC guidelines.

` 5. PRIVACY POLICY `
- The website includes a Privacy Notice accessible from the footer and
referenced during user registration to comply with the Kenya Data Protection
Act (2019) and ODPC guidelines. User consent is obtained before collecting
personal data, and cookies are disclosed transparently

*** CONCLUSION ***
This project demonstrates a basic but functional online marketplace frontend that is responsive, user-friendly, and compliant with Kenya’s digital laws and ethical standards. The design and implementation reflect responsible data handling and secure frontend development practices.

