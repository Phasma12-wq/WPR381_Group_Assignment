const fs = require('fs')

//Arrays for data access
var about = [];
var events = [];
var contacts = [];

//functions to load data onto arrays
function getEvents() {
    fs.readFile('events.json' , 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading the file: ', err);
            return;
        }

        const jsonData = JSON.parse(data);

        return jsonData
    });
}

function getAbout() {
    about
    
    fs.readFile('about.json' , 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading the file: ', err);
            return;
        }

        const jsonData = JSON.parse(data);

        return jsonData
    });
}

function writeToAbout(name, surname, phone){
    const contact = {
        firstName: name,
        lastName: surname,
        Phone: phone
    }

    const jsonData = JSON.stringify(contact, null, 4)

    fs.writeFile('about.json', jsonData, 'utf-8', (err) => {
        if (err) {
            console.error('Error writing to file: ', err);
            return;
        }
    });
}

function getContact() {
    fs.readFile('contact.json' , 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading the file: ', err);
            return;
        }

        const jsonData = JSON.parse(data);

        return jsonData
    });
}