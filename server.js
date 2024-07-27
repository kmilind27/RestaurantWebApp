// /server/server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../foodweb')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../foodweb/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../foodweb/about.html'));
});

app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, '../foodweb/menu.html'));
});

app.get('/reservation', (req, res) => {
  res.sendFile(path.join(__dirname, '../foodweb/reservation.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
