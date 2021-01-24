controller = {}
const connection = require('../dbConnection/connection')

controller.index = async (req, res) => {
  try {
    const title = 'INDEX DESDE EL SERVIDOR CON PUG Y UNA VARIABLE'
    await connection()
    console.log('CONNECTION OK')
    res.render('index', { title })
  } catch (err) {
    console.log(err)
  }
}

module.exports = controller
