const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.post('/auth', (req, res) => {
  const streamkey = req.body.key

  if (streamkey === 'topsecret') {
    res.status(200).send()
    return
  } else {
    console.log(`잘못된 스트림 키 : ${streamkey}`)
  }

  res.status(403).send()
})

app.listen(3000, () => {
  console.log('서버가 3000 포트에서 작동중')
})
