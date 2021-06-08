require('./db/mongoose')
const Task = require('./models/tasks')

// Task.findByIdAndRemove('60be1b3b1144fe5d5072e9d4')
//   .then((res) => {
//     console.log(res)
//     return Task.countDocuments({ completed: false })
//   })
//   .then((res) => {
//     console.log(res)
//   }).catch(e=>{console.log(e)})

const doWork = async () => {
  const data = await Task.findById('60bd9b1089c52244742d18da')
  console.log(data)
  await Task.findByIdAndRemove('60bd9b1089c52244742d18da')
  console.log('___Deleted')
  const data1 = await Task.countDocuments({ completed: false })
  console.log(data1)
}

doWork()
