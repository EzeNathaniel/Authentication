//email string, unique, required, validate,
//password- string, required,minlength

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const {isEmail} = require('validator')

// for each employee we want their - name roles, level, age
//timestamps - createdAt - updateAt
const usersSchema = new Schema({
    email: {
        type: String,
        unique: [true, "this email has been registered"],
        required: [true, "Please provide email" ],
        validate: [isEmail, "Please enter a valid email"],
        // validate: [()=>{}, "Please enter a valid email"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: [10, "The minimum password length is 10"]
        
    },
 
},
{timestamps: true}
)
// mongoose hooks
// function that protect user infor before we save

usersSchema.pre('save', async function (next){
const salt = await bcrypt.genSalt()
this.password = await bcrypt.hash(this.password, salt);
next();
})
module.exports = mongoose.model('User', usersSchema);
// or 
//const Employee
