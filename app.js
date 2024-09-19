const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded form data (for contact form)
app.use(bodyParser.urlencoded({ extended: true }));

// Route for the homepage
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/secondary', (req, res) => {
    res.render('secondary');
});

// Route for the contact page
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    });