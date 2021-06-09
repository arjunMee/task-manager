const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')

const router = new express.Router()

router.post('/users', async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({ user, token })
  } catch (error) {
    res.status(404).send(error)
  }
})

router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredential(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.send({ user, token })
  } catch (error) {
    res.status(400).send()
  }
})

router.get('/users/me', auth, async (req, res) => {
  // try {
  //   const data = await User.find({})
  //   res.send(data)
  // } catch (e) {
  //   res.status(500).send(e)
  // }

  // auth doing all the stuff for us
  res.send(req.user)
})

router.get('/users/:id', async (req, res) => {
  try {
    const data = await User.findById(req.params.id)
    if (!data) {
      return res.status(404).send(e)
    }
    res.send(data)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.patch('/users/:id', async (req, res) => {
  const update = Object.keys(req.body)
  const allowedupdate = ['name', 'email', 'password', 'age']
  const isValid = update.every((update) => allowedupdate.includes(update))

  if (!isValid) {
    return res.status(404).send({ error: 'invalid updates 1' })
  }

  try {
    // const data = await User.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // })
    const user = await User.findById(req.params)
    update.forEach((update) => (user[update] = req.body[update]))
    await user.save()
    if (!user) {
      return res.status(500).send({ error: 'invalid updates 2' })
    }
    res.send(user)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.delete('/users/:id', async (req, res) => {
  try {
    const user = await Task.findByIdAndDelete(req.params.id)

    if (!user) {
      return res.status(404).send()
    }

    res.send(user)
  } catch (error) {
    return res.status(500).send()
  }
})

module.exports = router
