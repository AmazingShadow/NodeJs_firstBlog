const mongoose = require('mongoose');

// stop warning.
mongoose.set('strictQuery', true);
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev');
        console.log('Connect successfully!');
    } catch (error) {
        console.log('Connect fail!');
    }
}

module.exports = {connect};
