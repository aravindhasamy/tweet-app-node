const express = require('express')
var cors = require('cors')
console.log("before mongoose")
require('./db/mongoose')
console.log("after mongoose")
const tweetRouter = require('./routers/tweet')
console.log("router initialized")

const app = express()
console.log("after app")
app.use(express.json())
app.options('*', cors())
app.use(tweetRouter)
console.log("end of app")


module.exports = app