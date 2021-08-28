require('../src/db/mongoose')
const Task = require('../src/models/task')


// delete document by id and then count the number of incompleted documents
Task.findByIdAndDelete('6000c97a30e60c69b854c614').then((task)=>{
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((error) =>{
    console.log(error)
})
