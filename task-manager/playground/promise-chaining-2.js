require('../src/db/mongoose')
const Task = require('../src/models/task')


// delete document by id and then count the number of incompleted documents
// Task.findByIdAndDelete('6000c97a30e60c69b854c614').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((error) =>{
//     console.log(error)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('6000c97a30e60c69b854c614').then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})
