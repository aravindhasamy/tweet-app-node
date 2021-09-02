const app = require('./app')
const port = 3005
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})