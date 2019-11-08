const { Schema, model} = require('mongoose');

const PiadaSchema = new Schema({
    piada: {
        type: String,
        required: true
    }
});
module.exports = model('Piada', PiadaSchema);