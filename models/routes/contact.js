const express=require("express")
const router=express.router()
const contact=require("../models/contact")

//test
//localhost:5000/contacts/test
//@ path
//test route 
//public/private

router.get('/test',(req,res)=>{
    res.send("tested")
})


//add contact
router.post('/addContact',(req,res)=>{
    const {name,email,phone}=req.body
    const newContact= new contact({
        name,phone,email
    })
    newContact.save()
    .then(contact=>res.send(contacts))
    .catch(err=> console.log(err))

    // get all contact
    router.get('/all',(req,res)=>{
        Contact.find()
        .then(contact=>res.send(contacts))
    .catch(err=> console.log(err))
    })
//delete contact
    router.deletet("/deleteContact/:_id",(req,res)=>{
const{_id}=req.params
contact.findOneAndDelete({_id})
.then(contact=>res.send(contacts))
.catch(err=> console.log(err))
    })
    //get contact by id
    router.get("/:_id",(req,res)=>{
        const {_id}=req.params
        contact.findOne({_id})
        .then(contact=>res.send(contacts))
    .catch(err=> console.log(err))

    router.put("/editContact/:_id"(req,res)=>{
        const {_id}=req.params
        const {name,email,phone}=req.body

        Contact.findOneAndUpdate({_id},{$set:{name,email,phone}})
        .then(contact=>res.send(contacts))
    .catch(err=> console.log(err))
    })
    })
})
module.exports=router