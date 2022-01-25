const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRoute');
const messengerRoute = require('./routes/messengerRoute');
const databaseConnect = require('./config/database');

dotenv.config({
    path: "backend/config/config.env"
})

const PORT = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(cookieParser())
app.use('/api/messenger', authRouter);
app.use('/api/messenger', messengerRoute);

app.get('/', (req, res) => {
    res.send('ok')
})

databaseConnect()


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})