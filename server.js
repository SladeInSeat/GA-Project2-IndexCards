const express = require('express')
const app = express()
const routes = require('./index')


app.use('/', routes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("connected at port: " + PORT);
})

