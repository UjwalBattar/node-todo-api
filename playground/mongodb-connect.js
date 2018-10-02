// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } else {
        console.log('Connected to MongoDb server');
    }

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Ujwal',
    //     age: 25,
    //     location: "California"
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     // console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    // db.collection('Users').insertMany([{
    //     name: 'Ujwal',
    //     age: 25,
    //     location: "California"
    // }, {
    //     name: 'Ujwal',
    //     age: 26,
    //     location: "California"
    // }, {
    //     name: 'Ujwal',
    //     age: 27,
    //     location: "California"
    // }, {
    //     name: 'Me',
    //     age: 28,
    //     location: "California"
    // }, {
    //     name: 'Myself',
    //     age: 29,
    //     location: "California"
    // }, {
    //     name: 'I',
    //     age: 30,
    //     location: "California"
    // }], (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     // console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });


    client.close();
});