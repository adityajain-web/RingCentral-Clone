const express = require('express');
const app = express();
const dotenv = require('dotenv');
const authRouter = require('./routes/authRoute')
const databaseConnect = require('./config/database');

dotenv.config({
    path:"backend/config/config.env"
})

const PORT = process.env.PORT || 4000

app.use('/api/messenger', authRouter)

app.get('/',(req, res)=>{
    res.send('ok')
})

databaseConnect()


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})