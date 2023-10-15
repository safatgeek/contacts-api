const express = require("express")
const contactRouter = require("./routes/contactRoutes")
const errorHandler = require("./middleware/errorHandler")
const dotenv = require("dotenv").config()

const app = express()

app.use(express.json())

const port = process.env.PORT || 5000

app.use("/api/contacts/", contactRouter)
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})