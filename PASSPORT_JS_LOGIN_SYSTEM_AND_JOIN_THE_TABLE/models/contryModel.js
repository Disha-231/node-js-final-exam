const mongoose = require('mongoose');

const contryschema = mongoose.Schema({
    contry: {
        type: String,
        required: true
    }
})
const contry = mongoose.model('contry', contryschema);
module.exports = contry;