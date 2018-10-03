const {
    ObjectID
} = require('mongodb');

const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');
const {
    User
} = require('./../server/models/user');

// does not return doc
// Todo.deleteMany({}).then((result) => {
//     console.log(result);
// });

// does return doc
// Todo.findOneAndRemove({_id: "5bb53f70ba03481af06ad941"}).then((todo) => {
//     console.log(todo);
// });

// does return doc
Todo.findByIdAndRemove('5bb53f70ba03481af06ad941').then((todo) => {
    console.log(todo);
});