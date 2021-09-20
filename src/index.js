const app = require('./app')
// const port = process.env.PORT || 3005
console.log("process.env.PORT ", process.env.PORT )
app.listen(process.env.PORT || 3005, '0.0.0.0', () => {
    console.log('Server is up on port ' + process.env.PORT )
})