const { connect } = require('mongoose');

module.exports.connectMongo = () => {
    connect('mongodb://127.0.0.1:27017/OficinaDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('We are making some connections with the database!!!'))
        .catch(() => console.log('Ohhhh, something went wrong!'));
} 
//    connect('mongodb://admin:P4sSw0rD@localhost:27017/retailDB?authSource=admin', {
