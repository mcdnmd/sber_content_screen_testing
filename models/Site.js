const mongoose = require('mongoose');
const { Schema } = mongoose;

const siteSchema = new Schema({
    url: {
        type: String,
        required: true,
        unique: true
    },
    html: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('site', siteSchema);
