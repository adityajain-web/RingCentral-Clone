const mongoose = require('mongoose');

const databaseConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const conSuccess = mongoose.connection
    conSuccess.once('open', _ => {
        console.log('Database connected:', process.env.DATABASE_URL)
    })
}

module.exports = databaseConnect;