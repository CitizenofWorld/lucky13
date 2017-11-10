var express = require('express')
var app = express()
var cors = require('cors')
const PORT = 9999

app.use(cors())

app.get('/api/tasks', (req, res) => {
  const data = {
    items: ['ds','ux','wdi']
  }

  res.json(data)
})

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`)
})