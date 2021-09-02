const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/tweet-api", {
    useNewUrlParser: true,
    
}).then(() => {
    console.log("DB connected successfully")
}, (error) => {
    console.log("Error connecting to DB", error)
})