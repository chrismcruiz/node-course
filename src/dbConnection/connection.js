const mongoose = require('mongoose')

const password = '3P4r3EKBoGEHcue2'
const dbname = 'pokedex'
const uri = `mongodb+srv://admin:${password}@cluster0.i4ps9.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = () =>
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
