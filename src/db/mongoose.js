const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, //access the index is created to allow us to get data from mongodb fast
})

const User = mongoose.model('User', {
  name: {
    type: String,
    validate(value) {
      if (value < 0) {
        throw new Error('age must be postive number')
      }
    },
  },
  age: { type: Number },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('entry valid email')
      }
    },
  },
})

const me = new User({
  name: 'arjun',
  age: 24,
})

me.save()
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })

const Tasks = mongoose.model('task', {
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
  },
})

const newTask = new Tasks({
  description: 'heelo bois im done',
  completed: true,
})

newTask
  .save()
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })
