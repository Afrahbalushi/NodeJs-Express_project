import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact } from "../Controllers/crmController";

const routes = (app) => {
    app.route('/contact')

//get all contacts
    .get((req, res, next) => {
   //middleware
   console.log(`Request from: ${req.originalUrl}`)
   console.log(`Request type: ${req.method}`)
   next();
}, getContacts)

//post new contact
    .post(addNewContact); 

    app.route('/contact/:contactId')
//get specific contact
    .get(getContactWithID)

//update contact
    .put(updateContact)

//delete contact
    .delete(deleteContact) 
}

export default routes;