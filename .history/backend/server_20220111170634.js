const express = require('express');
const app = express();
const dotenv = require('dotenv')
const databaseConnect = require('./config/database');
const PORT = process.env.PORT || 4000



app.get('/',(req, res)=>{
    res.send('ok')
})

databaseConnect()


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})