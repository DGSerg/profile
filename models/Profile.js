const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    comment: {
        type: String
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectID
    }
});

module.exports = mongoose.model('Profiles', profileSchema);