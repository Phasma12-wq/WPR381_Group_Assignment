// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

//In-memory array for contacts
var contacts = [];

const team = [
  { name: "Ulrigh Oosthuizen", role: "Team Lead / Front End Dev", number: 1, image: "/images/helmet.png"},
  { name: "Gordon Mullin", role: "Front End Dev", number: 2, image: "/images/wheel.png"},
  { name: "Bernardt Dawidt van Greunen", role: "Data Manager / Backend Dev", number: 3, image: "/images/gear.png"},
  { name: "Carmen Walliser", role: "Documentation Manager", number: 4, image: "/images/flag.png"}
];

const events = [
    { title: "GT3 Events", participants: 20, price: 40, date: "", location: "", image: "/images/GT3.jpg", id: "GT3", class: "event-row", alt: "GT3 Events Photo"},
    { title: "F1 Events", participants: 20, price: 100, date: "", location: "", image: "/images/cars_Lined_up2.jpg", id: "", class: "event-row reverse", alt: "F1 Events Photo"},
    { title: "Nascar Events", participants: 40, price: 50, date: "", location: "", image: "/images/bristol-tp-3.jpg", id: "", class: "event-row", alt: "Nascar Events Photo"},
    { title: "Moto GP Events", participants: 22, price: 40, date: "", location: "", image: "/images/bikes_Lines_up.jpg", id: "", class: "event-row reverse", alt: "MotoGP Events Photo"},
    { title: "WRC Events", participants: 88, price: 45, date: "", location: "", image: "/images/wrc.jpg", id: "", class: "event-row", alt: "WRC Events Photo"},
    { title: "Car Meet Events", participants: 200, price: 10, date: "", location: "", image: "/images/car_meet.jpg", id:"", class: "event-row reverse", alt: "Meet Event Photo"}
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
