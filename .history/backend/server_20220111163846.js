const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000

const databaseConnect = require('./config/database');
databaseConnect()

app.get('/',(req, res)=>{
    res.send('ok')
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})