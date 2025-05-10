const fs = require('fs')

//Arrays for data access
var about = [];
var events = [];
var contacts = [];

//functions to load data onto arrays on startup
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

        console.log(`Data loaded from events.json: ${jsonData}`)
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
        console.log(`Data loaded from about.json: ${jsonData}`)

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
        console.log(`Data loaded from contact.json: ${jsonData}`)

        contacts =  jsonData

        return contacts
    });
}

module.exports = {
    getAbout,
    getEvents,
    writeToContacts,
    getContact,
    about,
    events,
    contacts
}

/*
    JSON Object definition:

    The data retrieved from the arrays are stored in JSON object format, so do the following to 
    access the informations properties

    - getAbout:
        - temp[i].firstName
        - temp[i].lastName
        - temp[i].phone
        - temp[i].email
    
    - getContact:
        - temp[i].name
        - temp[i].email
        - temp[i].message
    
    - getEvents
        - temp[i].title
        - temp[i].date
        - temp[i].location
        - temp[i].image_location

*/