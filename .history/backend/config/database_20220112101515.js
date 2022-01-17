const mongoose = require('mongoose');

const databaseConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('Mongodb database connected', process.env.DATABASE_URL)
    })

    
}

module.exports = databaseConnect;