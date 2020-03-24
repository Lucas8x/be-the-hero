const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const routes = require('./routes')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3001

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(routes)

app.listen(port, () => {
  console.log(`Server listen port: ${port}`)
})