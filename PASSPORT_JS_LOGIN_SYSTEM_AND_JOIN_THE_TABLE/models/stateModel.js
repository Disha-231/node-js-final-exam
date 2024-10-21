const mongoose = require('mongoose');

const stateschema = mongoose.Schema({
    contryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'contry'
    },
    state :{
        type:String,
        required:true
    }
})
const state = mongoose.model('state', stateschema);
module.exports = state;