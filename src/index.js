require('./db/mongoose')
const express = require('express')
const User = require('./models/user')
const Task = require('./models/tasks')
const { ObjectID } = require('mongodb')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
  const user = new User(req.body)

  user
    .save()
    .then(() => {
      res.send(user)
    })
    .catch((error) => {
      res.status(400).send(error)
    })
})

app.get('/users', (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users)
    })
    .catch((e) => {
      res.status(500).send(e)
    })
})

app.get('/users/:id', (req, res) => {
  // User.findOne({ _id: new ObjectID(req.params.id) })
  //   .then((users) => {
  //     res.send(users)
  //   })
  //   .catch((e) => {
  //     res.status(500).send(e)
  //   })
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send()
      }

      res.send(user)
    })
    .catch((e) => {
      res.status(404).send(e)
    })
})

app.post('/tasks', (req, res) => {
  const task = new Task(req.body)

  task
    .save()
    .then((suc) => {
      res.send(suc)
    })
    .catch((e) => res.status(400).send(e))
})

app.get('/tasks', (req, res) => {
  Task.find({})
    .then((user) => {
      if (!user) {
        return res.status(404).send()
      }

      res.send(user)
    })
    .catch((e) => {
      res.status(400).send()
    })
})

app.get('/tasks/:id', (req, res) => {
  Task.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send()
      }

      res.send(user)
    })
    .catch((e) => {
      res.status(404).send(e)
    })
})

app.listen(port, () => {
  console.log('connected to the' + port)
})
