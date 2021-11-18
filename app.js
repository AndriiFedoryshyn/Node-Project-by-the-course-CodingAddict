const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const tasks = require('./routes/routes')
const connectDB = require('./db/connection')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMidleware = require('./middleware/error-handler')




app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMidleware)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server ${port} is active...`))

    } catch (error) {
        console.log(error);
    }
}

start()
