const doWorkCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, [ 1, 4, 7 ])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})
// setTimeout(() => {
//     console.log('Two seconds are up')
// },2000)

// const names = ['Andrew', 'Jen','Jess']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })



// const add = (num1, num2, callback) => {
//     setTimeout(() => {
//         callback(num1+num2)
//     }, 2000)
// }

// add(1,4, (sum) => {
//     console.log(sum) // should print 5
// })
