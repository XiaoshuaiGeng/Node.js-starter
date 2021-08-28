// CRUD operations

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
// console.log(id + '\n' + id.toHexString())

MongoClient.connect(
    connectionURL, 
    { useNewUrlParser: true, useUnifiedTopology: true}, 
    (error, client) => 
{
    if (error) {
        return console.log('Unable to connect to database!')
    }
    
    console.log('Connected correctly!')

    const db = client.db(databaseName)
    

    db.collection('users').deleteOne({
        age: 25
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // Update
    // db.collection('tasks').updateMany({}, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne(
    //     {
    //     _id: new ObjectID("5ffddcedfc7287341c3f0e91")
    //     },

    //     {
    //         $inc: {
    //             age: 2
    //         }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, result) =>{
    //     if (error) {
    //         return console.log(error)
    //     }

    //     console.log(result)
    //})
    // db.collection('users').findOne({ _id: new ObjectID('5ffddcedfc7287341c3f0e91')}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 21 }).toArray( (error, users) => {
    //     if (error) {
    //         return console.log(error)
    //     }
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 21 }).count( (error, count) => {
    //     if (error) {
    //         return console.log(error)
    //     }
    //     console.log(count)
    // })

    // Create
    // db.collection('users').insertOne({
    //     name: 'Xiaoshuai',
    //     age: 21
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'Jen',
    //         age: 25
    //     },

    //     {
    //         name: 'Andrew',
    //         age: 28
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log(error)
    //     }

    //     return console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'finish nodejs course',
    //         completed: false
    //     },

    //     {
    //         description: 'COMP2057 Tutor hours',
    //         completed: false,
    //     },

    //     {
    //         description: 'weather application deployment',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log(error)
    //     }

    //     return console.log(result.ops)
    // })
})