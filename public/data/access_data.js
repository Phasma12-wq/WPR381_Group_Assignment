const fs = require('fs')

function writeToContacts(name, email, message){
    fs.readFile('./public/data/contact.json', 'utf-8', (err,jsonData) => {
        if (err) {
            console.error('Error writing to file: ', err);
            return;
        }
        
        let contacts = JSON.parse(jsonData)

        const contact = {
            Name: name,
            Email: email,
            Message: message
        };

        contacts.push(contact);

        fs.writeFile('./public/data/contact.json', JSON.stringify(contacts, null, 4), (err) => {
            if (err) {
                console.error('Error writing to file: ', err);
                return;
            }
        });

        return contacts
    });
    
}

async function getContact() {
    try {
        const data = await fs.readFile('./public/data/contact.json', 'utf-8');
        const jsonData = JSON.parse(data);

        console.log(`Data loaded from events.json: ${jsonData}`)

        return jsonData;
    } catch (error) {
        console.error('Error reading the file: ', error);
        return;
    }
}

module.exports = {
    getAbout,
    getEvents,
    writeToContacts,
    getContact
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