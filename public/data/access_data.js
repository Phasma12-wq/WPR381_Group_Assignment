const fs = require('fs')

//Arrays for data access
var about = [];
var events = [];
var contacts = [];

//functions to load data onto arrays
function getEvents() {
    if (events) {
        return events
    }
    
    fs.readFile('events.json' , 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading the file: ', err);
            return;
        }

        const jsonData = JSON.parse(data);

        events = jsonData

        return events
    });
}

function getAbout() {
    if(about) {
        return about
    }
    
    fs.readFile('about.json' , 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading the file: ', err);
            return;
        }

        const jsonData = JSON.parse(data);

        about =  jsonData

        return about
    });
}

function writeToContacts(name, email, message){
    const contact = {
        Name: name,
        Email: email,
        Message: message
    }

    contacts.push(contact)

    const jsonData = JSON.stringify(contact, null, 4)

    fs.writeFile('about.json', jsonData, 'utf-8', (err) => {
        if (err) {
            console.error('Error writing to file: ', err);
            return;
        }
    });
}

function getContact() {
    if (contacts) {
        return contacts
    }
    
    fs.readFile('contact.json' , 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading the file: ', err);
            return;
        }

        const jsonData = JSON.parse(data);

        contacts =  jsonData

        return contacts
    });
}