const mongoose = require('mongoose');

const ProfileFormSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true 
    },
    lastname:{
        type: String,
        required: true 
    }
    // email:{
    //     type: String,
    //     required: true 
    // },
    // company: {
    //     type: String,
    //     required: true 
    // },
    // website:{
    //     type: String,
    //     required: true 
    // },
    // location:{
    //     type: String,
    //     required: true 
    // },
    // skills:{
    //     type: String,
    //     required:true
    // },
    // githubusername:{
    //     type: String,
    //     required: true 
    // },
    // bio:{
    //     type: String,
    //     required: true 
    // },
    // linkedin:{
    //     type: String,
    //     required: true 
        
    // },
    // youtube:{
    //     type: String,
    //     required: true 
    // },
    // date:{
    //     type: Date,
    //     default: Date.now
    // }
    
});



const ProfileForm = mongoose.model('ProfileForm', ProfileFormSchema)

module.exports = ProfileForm;
