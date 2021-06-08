require('./db/mongoose')
const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//   console.log(req.method, req.path)
//   next() //it won't run more if don't specify
// })

// app.use((req, res, next) => {
//   res.status(503).send('Sorry for Delay ?? But server is under Maintainace')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log('connected to the' + port)
})

// with Middleware = new request -> run route handler
//
// with middleware = new request -> do something -> run route handler
