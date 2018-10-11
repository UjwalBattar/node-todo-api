const mongoose = require('mongoose');
const validator = require('validator');
mongoose.set('useCreateIndex', true);

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email.'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

module.exports = {
    User
};

// Origially in server.js as example

// var oneUser = new User({
//     name: 'Ujwal',
//     age: 25,
//     email: 'ujwal@ujwal.com',
//     location: 'California'
// });

// oneUser.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log(`Unable to save user`, e);
// });