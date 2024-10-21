const mongoose = require('mongoose');

const cityschema = mongoose.Schema({
    contryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'contry'
    },
    stateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'state'
    },
    city :{
        type:String,
        required:true
    }
})
const city = mongoose.model('city', cityschema);
module.exports = city;