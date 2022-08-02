let mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
})
module.exports = mongoose.model('person', userSchema)