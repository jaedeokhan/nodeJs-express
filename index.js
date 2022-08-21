const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
  const p = req.params;
  console.log(p);
  const q = req.query;
  console.log(q);

  res.send({'message' : 'Hello World!'});
})

app.use(express.json());
app.post('/user/:id', (req, res) => {
  const p = req.params;
  console.log(p);
  const b = req.body;
  console.log(b);

  res.send({'message' : 'Hello World!'});
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})