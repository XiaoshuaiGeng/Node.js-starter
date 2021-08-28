const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const me = new User({
//     name: '   Xiaoshuai     ',
//     email: 'xiaoshuai@gmail.com      ',
//     password: 'Ppassword123'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

// const test = new Task({
//     description: '    Test    ',
    
// })

// test.save().then(() => {
//     console.log(test)
// }).catch((error) => {
//     console.log(error)
// })