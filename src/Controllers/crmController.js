import mongoose from "mongoose";
import { ContacSchema } from '../models/crmModels';

const Contact = mongoose.model('Contact', ContacSchema);

export const addNewContact = async (req, res) => {
   
        const newContact = new Contact(req.body);
        const savedContact = await newContact.save();
        res.json(savedContact);
      
};

export const getContacts = async (req, res) => {
       
    const contacts = await Contact.find({});
    res.json(contacts);

};
