// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const data_access = require('./public/data/access_data.js')

const team = [
  { name: "FOR NOW KNOW", role: "THIS IS AN EXAMPLE" },
  { name: "Name", role: "Team Lead" },
  { name: "Name", role: "Backend Dev" },
  { name: "Name", role: "Data Manager" },
  { name: "Name", role: "Docs" }
];

const events = [
{ title: "Park Cleanup", date: "2025-05-10", location: "Greenfield Park", image: "/images/cleanup.jpg" },
{ title: "Community Braai", date: "2025-05-20", location: "Eastlynn Hall", image: "/images/braai.jpg" }
];

const messages = [];

// Home
router.get('/', (req, res) => {
  res.render('pages/home', { page: 'home' });
});

// About
router.get('/about', (req, res) => {
  res.render('pages/about', { team, page: 'about' });
});

// Events
router.get('/events', (req, res) => {
  res.render('pages/events', { events, page: 'events' });
});

// Contact (GET)
router.get('/contact', (req, res) => {
  res.render('pages/contact', { page: 'contact' });
});

// Contact (POST)
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (name && email && message) {
    messages.push({ name, email, message });
  }
  res.redirect('/thankyou');
});

// Thank You
router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou', { page: '' });
});

router.post('/contact', (req, res) => {
    const formData = req.body;
    
    data_access.writeToContacts(formData.name, formData.email, formData.message)
    console.log("Contact information saved to array")
});

module.exports = router;
