const express = require('express')
const app = express()
const port = 80

app.use('../data', express.static('data'))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
