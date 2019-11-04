const express = require('express')
// const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./DB')
//  multer = require('multer'),
//  upload = multer({ storage: storage });

const apiroute = require('./api-route')
mongoose.Promise = global.Promise
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
)

const app = express()
// app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.use('/api/user', apiroute)
app.use('/api/product', apiroute)
// const port = process.env.PORT || 4000;
const port = 4000

app.listen(port, function () {
  console.log('Listening on port ' + port)
})
