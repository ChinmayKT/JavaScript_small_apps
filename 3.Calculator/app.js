const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 3055

app.use(express.static('code'))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/code/ca.html'))
})

app.listen(port, (req, res) => console.log('SERVER STARTED'))