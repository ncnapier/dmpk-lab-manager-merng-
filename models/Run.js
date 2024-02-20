const { model, Schema} = require('mongoose');

const runSchema = new Schema({
    instrument: String,
    username: String,
    assay: String,
    trays: String,
    createdAt: String,
    comments: [
        {
            body: String,
            username: String,
            createdAt: String
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }


});

module.exports = model('Run', runSchema);