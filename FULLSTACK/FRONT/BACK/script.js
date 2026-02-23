require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
console.log(process.env.PORT)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact',(reqest,response)=>{
    response.send("<h1>contact Here..</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
