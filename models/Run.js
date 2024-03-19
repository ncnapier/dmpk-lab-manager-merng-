const { model, Schema} = require('mongoose');

const runSchema = new Schema({
    
    
    instrument: String,
  
    assay: String,
    trays: String,
    createdAt: String,
    // comments: [
    //     {
    //         body: String,
    //         username: String,
    //         createdAt: String
    //     }
    // ]
    


});



module.exports = model('Run', runSchema);