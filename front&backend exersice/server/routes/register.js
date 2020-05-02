const express = require('express');
const router = express.Router();
const ProfileForm = require('../models/ProfileForm');

router.get('/get-form', async (req, res) => {

    //we need await, to get data first from MongoDB and it as a response to the route.
    let form = await ProfileForm.find()
    .

    res.send(form)
})

router.post('/new-form', (req,res) =>{
    let {firstname,lastname,email,company,website,location,skills,githubusername,bio,linkedin,youtube} = req.body

    let newForm = new ProfileForm({
        firstname:firstname,
        lastname:lastname
        // email:email,
        // company:company,
        //  website:website,
        //  location:location, 
        //  skills: skills, 
        //  githubusername:githubusername,
        //  bio:bio,
        //  linkedin: linkedin,
        //  youtube: youtube
    })

    newForm.save()
    .then(response=>{
        console.log(response);
        res.send({msg: 'new form saved', mongo_response:response})
     }).catch(error=>{
         console.log(error);
         res.send({msg: error})   
     })
})



module.exports = router;