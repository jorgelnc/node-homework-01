const path = require("path");
const fs = require("fs");

const contactsPath = path.join(__dirname,"db","contacts.json");


// TODO: document each function
function listContacts() {
    fs.readFile(contactsPath, "utf-8", (error, data) => {
        if (error) {
            console.log("error");
        }
        console.log(data);
    });
}
listContacts();

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf-8", (error, data) => {
        if (error) {
            console.log("error");
        }
        console.log(data);
    });
}

function removeContact(contactId) {
  // ...your code
}

function addContact(name, email, phone) {
  // ...your code
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}