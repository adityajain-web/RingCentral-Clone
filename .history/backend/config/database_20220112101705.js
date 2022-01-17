const mongoose = require('mongoose');

const databaseConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(()=>{
        console.log('Mongodb database connected ', process.env.DATABASE_URL)
    }).catch(error=>{
        console.error(`database connection error `, error)
    })
}

module.exports = databaseConnect;