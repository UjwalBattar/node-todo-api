var mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        minLength: 6,
        trim: true
    },
    location: {
        type: String,
        trim: true
    }
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