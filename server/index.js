const PORT = process.env.PORT || 1234
const app = require('./app')

const init = async () => {
  try {
    app.listen(PORT, () => console.log(`Stuff's ipsuming on ${PORT}`))
  } catch (ex) {
    console.log(ex)
  }
}

init()
