const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

/// ROUTES

// test route
router.get("/test", (req, res) => {
  res.send("Hello World");
});
// add contact
router.post("/add", async (req, res) => {
  try {
    const { name, email, phone } = req.body
    const newContact = new Contact({ name, email, phone })
    await newContact.save()
    res.status(200).send({ msg: "Contact Added Successfully ...", newContact })
  } catch (error) {
    res.status(400).send({ msg: "Can Not Add Contact !!!", error })
  }
});

// get all contact

router.get('/all', async(req, res) =>{
  try {
    const listContacts = await Contact.find()
    res.status(200).send({ msg: "This is the list of all contacts...", listContacts})
  } catch (error) {
    res.status(400).send({ msg: "Can Not get all contacts !!!", error })
  }
});

// get one contact

router.get('/:id', async (req, res) =>{
  try {
    const contactToGet = await Contact.findOne({_id: req.params.id})
    res.status(200).send({ msg: "i get the contact...", contactToGet})
  } catch (error) {
    res.status(400).send({ msg: "Can Not get the contact with this id !!!", error })
  }
})

// delete contact

router.delete('/:_id', async (req, res) =>{
  try {
    const {_id} = req.params
    await Contact.findOneAndDelete({_id})
    res.status(200).send({msg: "Contact Deleted..."})
  } catch (error) {
    res.status(400).send({ msg: "Can Not delete the contact with this id !!!", error })
  }
})

// edit contact

router.put('/:_id', async (req, res) =>{
  try {
    const {_id} = req.params;
    const result = await Contact.updateOne({_id}, { $set: { ...req.body }})
    res.status(200).send({msg:"Contact updated..."})
  } catch (error) {
    res.status(400).send({ msg: "Can Not update the contact with this id !!!", error })
  }
})

module.exports = router
