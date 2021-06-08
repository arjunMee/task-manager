const express = require('express')
const Task = require('../models/tasks')
const router = new express.Router()

router.post('/tasks', async (req, res) => {
  const task = new Task(req.body)

  try {
    task.save()
    res.send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get('/tasks', async (req, res) => {
  try {
    const data = await Task.find({})
    res.send(data)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get('/tasks/:id', async (req, res) => {
  try {
    const data = await Task.findById(req.params.id)
    if (!data) {
      return res.status(404).send(e)
    }
    res.send(data)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.patch('/tasks/:id', async (req, res) => {
  const update = Object.keys(req.body)
  const updateItem = ['description', 'completed']
  const isValid = update.every((data) => updateItem.includes(data))
  if (!isValid) {
    return res.status(404).send({ error: 'invalid updates 1' })
  }
  try {
    const data = await Task.findById(req.params.id)
    update.forEach((update) => (data[update] = req.body[update]))
    await data.save()
    // const data = await Task.findByIdAndUpdate(req.params.id, {
    //   new: true,
    //   runValidators: true,
    // })
    res.send(data)
  } catch (error) {
    return res.status(500).send({ error: 'invalid updates 2' })
  }
})

router.delete('/tasks/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)

    if (!user) {
      return res.status(404).send()
    }

    res.send(user)
  } catch (error) {
    return res.status(500).send()
  }
})

module.exports = router
