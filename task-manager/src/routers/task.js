const express = require('express')
const Task = require('../models/task')
const router = new express.Router()


router.post('/task', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(500).send()
    }

    // task.save().then( () => {
    //     res.status(201).send(task)
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })
})

router.get('/task', async (req, res) => {
    
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (error) {
        res.status(500).send()
    }
    // Task.find({}).then((tasks) => {
    //     res.send(tasks)
    // }).catch((error) => {
    //     res.status(500).send()
    // })
})

router.get('/task/:id', async (req, res) => {

    try {
        const task = await Task.findById(req.params.id)

        if(!task){
            res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(500).send(error)
    }
    // Task.findById(req.params.id).then((task) => {
    //     if (!task){
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch((error) => {
    //     res.status(500).send()
    // })
})

router.patch('/task/:id', async (req, res) => {

    const requestKeys = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = requestKeys.every((key) => allowedUpdates.includes(key))

    if (!isValidOperation){
        return res.status(400).send({error: "Invalid Updates"})
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        
        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/task/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task){
            return res.status(404).send()
        }

        res.send(task)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router