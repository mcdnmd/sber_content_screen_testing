const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    },
    subscriptions: [{
            ref: 'sites',
            type: Schema.Types.ObjectId
        }]
});

module.exports = mongoose.model('profile', profileSchema);
