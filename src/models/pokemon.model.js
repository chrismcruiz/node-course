const mongoose = require('mongoose')
// const Schema = mongoose.Schema
const { Schema } = mongoose // Exactamente lo mismo de arriba pero más limpio

// Es buena práctica poner los esquemas con mayúsculas

const PokeSchema = new Schema({
  name: String, // normas del modelo
})

// Tenemos que crear el modelo para poder exportarlo

const PokeModel = mongoose.model('pokemons', PokeSchema) // el primer parametro es el nombre de la colección en mongodb y como segundo parametro el esquema del modelo.

module.exports = PokeModel
