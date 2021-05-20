const express = require('express');
var bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.post('/getorder',(req,res) => {
    console.log(req.body)
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on ${process.env.PORT || 3000}`)
})