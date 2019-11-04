const mongoose = require('mongoose')

const ProdSchema = mongoose.Schema({
  name: String,
  price: Number,
  qty: Number,
  image: String
}, {
  timestamps: true
})

module.exports = mongoose.model('ProductDoc', ProdSchema)
