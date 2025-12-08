// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDb from "./db/index.js"

dotenv.config()
connectDb()












/*
 function dbconnect() {
    mongoose.connect(`${process.env.MONGODB-URI}/${DB_NAME}`)
}

dbconnect() 

*/
    
// same thing can be done like in line 4 to 11 but this is the more efficient practice to track it under try catch block and async await. 

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB-URI}/${DB_NAME}`) 
//     } catch (error) {
//         console.log("ERROR", error);
//         throw error;
//     }
// } )()
