var userModel = require('./userModel')
var productModel = require('./productModel')
var express = require('express')
var router = express.Router()
const config = require('./DB')
const jwt = require('jsonwebtoken')

router.route('/createuser').post(function (req, res) {
  var user = new userModel(req.body)
  user.save()
    .then(r => {
      let token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      })
      res.status(200).send({ auth: true, token: token, user: user })
    })
    .catch(() => {
      res.status(500).send('There was a problem registering the user.')
    })
})
router.route('/login').post((req, res) => {
  userModel.findOne({ email: req.body.email }, function (err, result) {
    if (err) {
      console.log(err)
    } else {
      if (result.password === req.body.password) {
        let token = jwt.sign({ id: result.id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        })
        res.status(200).send({ auth: true, token: token, user: result })
      } else {
        res.status(404).send('No user found.')
      }
    }
  })
})
router.route('/getusers').get((req, res) => {
  userModel.find((err, todos) => {
    if (err) {
      console.log(err)
    } else {
      res.json(todos)
    }
  })
})

router.route('/addproduct').post(function (req, res) {
  console.log('added product')
  var product = new productModel(req.body)
  product.save()
    .then(r => {
      res.status(200).json({ 'user': 'product is added successfully' })
    })
    .catch(() => {
      res.status(400).send('unable to save to database')
    })
})
router.route('/getproducts').get(function (req, res) {
  productModel.find(function (err, products) {
    if (err) {
      res.status(500).send('error while processing')
    } else {
      // console.log(res.json(products))
      res.status(200).json(products)
    }
  })
})

module.exports = router
