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
        console.log('Connected to MongoDB server');
    }

    const db = client.db('TodoApp');

    // $inct -> increments value of field (use negative num to decrement)
    db.collection('Users').findOneAndUpdate({
        name: 'Myself'
    }, {
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // $set -> sets field
    // db.collection('Todos').findOneAndUpdate({
    //     text: "Delete this document"
    // }, {
    //     $set: {
    //         text: 'Updated this document'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    client.close();
});