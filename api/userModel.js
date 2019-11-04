const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  dob: Date,
  age: Number,
  edu: String,
  aboutme: String
}, {
  timestamps: true
})

module.exports = mongoose.model('UserDoc', UserSchema)
