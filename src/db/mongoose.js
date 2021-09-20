const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://taskapp:Aravind%40123@cluster0.udqpn.mongodb.net/tweet-api?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    
}).then(() => {
    console.log("DB connected successfully")
}, (error) => {
    console.log("Error connecting to DB", error)
})