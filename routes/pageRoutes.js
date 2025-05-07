// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const data_access = require('./public/data/access_data.js')

router.get('/', (req, res) => {
});

router.get('/about', (req, res) => {
});

router.get('/events', (req, res) => {
});

router.get('/contact', (req, res) => {
});

router.get('/thankyou', (req, res) => {
});

router.post('/contact', (req, res) => {
    const formData = req.body;
    
    data_access.writeToContacts(formData.name, formData.email, formData.message)
});

module.exports = router;
