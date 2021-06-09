const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

// userSchema.pre('save', async function (next) {
//   const user = this

//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(user.password, 8)
//   }

//   next()
// })

module.exports = Task
