const express = require('express')
var cors = require('cors')
require('./db/mongoose')
const tweetRouter = require('./routers/tweet')

const app = express()
app.use(express.json())
app.options('*', cors())
app.use(tweetRouter)



module.exports = app