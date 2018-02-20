let mongoose = require('mongoose');

let AuthorSchema = new mongoose.Schema({
        name: {required: true, type: String, minlength: [3, "Author name needs to be greater than 3 characters!"]}
}, {timestamps: true});

module.exports = mongoose.model('Author', AuthorSchema);

