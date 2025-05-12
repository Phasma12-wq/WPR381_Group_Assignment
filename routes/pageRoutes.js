// routes/pageRoutes.js

const express = require('express');
const router = express.Router();


//In-memory array for contacts
var contacts = [];

const team = [
  { name: "Ulrigh Oosthuizen", role: "Team Lead", number: 1, image: "/images/tire-change.jpg"},
  { name: "Gordon Mullin", role: "Backend Dev", number: 2, image: "/images/tire-change.jpg"},
  { name: "Bernardt Dawidt van Greunen", role: "Data Manager", number: 3, image: "/images/tire-change.jpg"},
  { name: "Carmen Walliser", role: "Docs", number: 4, image: "/images/tire-change.jpg"}
];

const events = [
    { title: "GT3 Race Event", participant: 20, price: 40, date: "", location: "", image: "/images/GT3.jpg", id: "GT3", class: "event-row", alt: "GT3 Events Photo"},
    { title: "F1 Race Event", participant: 20, price: 100, date: "", location: "", image: "/images/cars_Lined_up2.jpg", id: "", class: "event-row reverse", alt: "F1 Events Photo"},
    { title: "Nascar Race Event", participant: 40, price: 50, date: "", location: "", image: "/images/bristol-tp-3.jpg", id: "", class: "event-row", alt: "Nascar Events Photo"},
    { title: "Moto GP Event", participant: 22, price: 40, date: "", location: "", image: "/images/bikes_Lines_up.jpg", id: "", class: "event-row reverse", alt: "MotoGP Events Photo"},
    { title: "WRC Race Event", participant: 88, price: 45, date: "", location: "", image: "/images/wrc.jpg", id: "", class: "event-row", alt: "WRC Events Photo"}
  ]

// Home
router.get('/', (req, res) => {
  res.render('./pages/home', { page: 'home' });
});

// About
router.get('/about', (req, res) => {
  res.render('pages/about', { data: team, page: 'about' });
});

// Events
router.get('/events', (req, res) => {
  res.render('pages/events', { data: events, page: 'events' });
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
    const contact = {
            Name: name,
            Email: email,
            Message: message
        };
    
    contacts.push(contact);

    console.log('Contact successfully added')

    //logs the data currently in the in-memory array
    console.log('Contact List')
    contacts.forEach(contact => {
      console.log(`Name: ${contact.Name}, Email: ${contact.Email}, Message: ${contact.Message}`);
    })

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
