var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const n100Schema = new Schema({
    NV101: { type: String, required: true },
    NV102: { type: String, required: true },
    NL145: { type: Date }
});

const Note = mongoose.model('N100', n100Schema);
