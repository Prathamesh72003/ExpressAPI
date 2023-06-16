const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    joiningdate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('clent', clientSchema);