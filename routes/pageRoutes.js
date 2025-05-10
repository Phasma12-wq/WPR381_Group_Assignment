// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const { getAbout, getEvents, writeToContacts, getContact } = require('../public/data/access_data.js')


/*
const team = [
  { name: "FOR NOW KNOW", role: "THIS IS AN EXAMPLE" },
  { name: "Name", role: "Team Lead" },
  { name: "Name", role: "Backend Dev" },
  { name: "Name", role: "Data Manager" },
  { name: "Name", role: "Docs" }
];

const messages = [];
*/


// Home
router.get('/', (req, res) => {
  res.render('./pages/home', { page: 'home' });
});

// About
router.get('/about', (req, res) => {
  let team_data = getAbout();

  res.render('pages/about', { team_data, page: 'about' });
});

// Events
router.get('/events', (req, res) => {
  event_data = getEvents();

  res.render('pages/events', { event_data, page: 'events' });
});

// Contact (GET)
router.get('/contact', (req, res) => {
  res.render('pages/contact', { page: 'contact' });
});

// Contact (POST)
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Validate input
  
  if (name && email && message) {
    
    writeToContacts(name, email, message);

    res.redirect('/thankyou');
  } else {
    return res.status(400).send('All fields are required.');
  }

});

// Thank You
router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou', { page: '' });
});

module.exports = router;
