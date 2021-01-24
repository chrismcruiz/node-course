const express = require('express')

const app = express()
const routes = require('./routes/index.routes')
const path = require('path')

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// ROUTES
app.use(routes)

// STATIC FILES
app.use(express.static(path.join(__dirname, '../public')))

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../public/404.html'))
})

app.listen(3000, () => {
  console.log('Servidor a la espera de conexiones')
})
