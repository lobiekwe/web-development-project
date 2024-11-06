
const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(__dirname + '/public'));
// Define a route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});
// Define a route for the about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/about.html'));
});
// Define a route for the contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '/contact.html'));
  });
// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});