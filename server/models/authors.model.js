const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Debe ingresar un nombre'],
        minlength: [3, 'El nombre no puede tener menos de 3 caracteres']
    }
    }, {timestamps: true});

const Authors = mongoose.model('Authors', AuthorsSchema);
AuthorsSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });
module.exports = Authors;