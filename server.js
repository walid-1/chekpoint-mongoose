const express = require("express")
const app = express()
const connectDB = require("./config/connectDB")
//midelware
app.use(express.json())
//connect database
connectDB()

// routes
app.use(require("./routes/contacts"))

app.use( express.json())


connectDB()
// ruun server 
const port = process.env.PORT || 5000
app.listen(port, err =>
    err? console.log("erreur"):console.log ( `server in running on port ${port}`)
    )