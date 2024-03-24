const { model, Schema} = require('mongoose');

const maintReqSchema = new Schema({
    body: String,
    username: String,
    createdAt: String,
    instrument: String,
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

module.exports = model('MaintReq', maintReqSchema);