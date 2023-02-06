//email string, unique, required, validate,
//password- string, required,minlength

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// for each employee we want their - name roles, level, age
//timestamps - createdAt - updateAt
const usersSchema = new Schema({
    email: {
        type: String,
        unique: [true, "this email has been registered"],
        required: [true, "Please provide email" ],
        validate: [()=>{}, "Please enter a valid email"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlenght: [10, "The minimum password lenght is 10"]
        
    },
 
},
{timestamps: true}
)
module.exports = mongoose.model('User', usersSchema);
// or 
//const Employee
