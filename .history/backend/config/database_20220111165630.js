const mongoose = require('mongoose');

const databaseConnect = () =>{
    console.log(process.env)
     mongoose.connect(process.env.DATABASE_URL,{
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true
     }).then(()=>{
         console.log("mongodb connected...");
     }).catch(error=>{
         console.error("mongodb connection error", error)
     })
}

module.exports = databaseConnect;