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

    // db.collection('Users').deleteMany({
    //     name: 'Ujwal'
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5bb2ec1de1e32180276fceaf")
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    client.close();
});