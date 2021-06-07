// //CRUD create read update delete

// const mongodb = require('mongodb')
// // const MongoClient = mongodb.MongoClient
// // const ObjectID = mongodb.ObjectID

// const { MongoClient, ObjectID } = mongodb
// //give all the function nessacery to connect to database so we can perfrom CRUD

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'
// //option  obejct useNewUrlParser: true

// const id = new ObjectID()

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log('unable tp connect to database')
//     }
//     // console.log('connected correctly')
//     const db = client.db(databaseName)

//     db.collection('tasks')
//       .deleteOne({ _id: new ObjectID('60bcd4cf6f67943cb4557292') })
//       .then((result) => {
//         console.log(result)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }
// )

const mongodb = require('mongodb')

const { MongoClient, ObjectID } = mongodb

const mongoUrl = 'mongodb://127.0.0.1:27017'

const dataBaseName = 'task-manager'

MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (error, result) => {
  if (error) {
    return console.log('unable to ctrated database')
  }

  console.log(new ObjectID())

  const db = result.db(dataBaseName)
})

// // inserting one data
// db.collection('people').insertOne(
//   { name: 'arjun', address: 'borkhera' },
//   (error, person) => {
//     if (error) {
//       return console.log('unable to ctrated database')
//     }

//     console.log(person.ops)
//   }
// )
// // inserting many data at once
// db.collection('people').insertMany(
//   [
//     { name: 'babu', address: 'pune' },
//     { name: 'bitu', address: 'mumbai' },
//     { name: 'bitu', address: 'borkhera' },
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log('unable to ctrated database')
//     }
//     console.log(result.ops)
//   }
// )

// // FindOne data
// db.collection('people').findOne({ name: 'arjun' }, (error, result) => {
//   if (error) {
//     return console.log('unable to ctrated database')
//   }
//   console.log(result)
// })

// // find many
// db.collection('people')
//   .find({ address: 'borkhera' })
//   .toArray((error, result) => {
//     if (error) {
//       return console.log('unable to ctrated database')
//     }
//     console.log(result)
//   })

// // update single File
// db.collection('people').updateOne(
//   { name: 'arjun' },
//   { $set: { name: 'arjun meena' } },
//   (error, result) => {
//     if (error) {
//       return console.log('unable to ctrated database')
//     }
//     console.log(result)
//   }
// )
// // update many files
// db.collection('people').updateMany(
//   { address: 'borkheraa' },
//   { $set: { address: 'borkhera' } },
//   (error, result) => {
//     if (error) {
//       return console.log('unable to ctrated database')
//     }
//     console.log(result)
//   }
// )
// // delete one
// db.collection('people').deleteOne(
//   { name: 'arjun meena' },
//   (error, result) => {
//     if (error) {
//       return console.log('unable to ctrated database')
//     }
//     console.log(result)
//   }
// )
