const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000

const databaseConnect = require('./config/database');

app.get('/',(req, res)=>{
    res.send('ok')
})

databaseConnect()


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})