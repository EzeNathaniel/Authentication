require('dotenv').config();
const express = require('express')
const app = express();
const PORT = 4000;
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const notFound = require("./middleware/notFound")
// const userRouter = require("./route/userRouter")
const newRouter = require("./route/newUserRouter")

// const employeeRouter = require('./routes/employeeRouter');
// con
app.set('view engine', "ejs")

//middleware
app.use(express.json());

//route
app.use(newRouter)

//error
app.use(notFound);


// mongoose.connect(process.env.MONGO_URI).then(()=>{
//     app.listen(PORT, ()=>{
//         console.log(`server runing on ${PORT}`)
//     })
// })
// .catch((err)=>{
//     console.log(err);
// })
const startserver = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(PORT, ()=>{
            console.log(`server running on ${PORT}`);
    })
}catch
    (error){
        console.log(error);
    };
}

startserver();








// mongoose.connect(process.env.MONGO_URI).then(()=>{
//     app.listen(PORT, ()=>{
//         console.log(`server runing on ${PORT}`)
//     })
// })
// .catch((err)=>{
//     console.log(err);
// })