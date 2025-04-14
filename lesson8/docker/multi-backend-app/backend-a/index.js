const express = require('express');
const fs = require('fs');
const app = express();
const axios = require('axios');
const PORT = 4001;

app.get('/', (req, res) => {
  const message = 'Hello from Backend A!';
  fs.appendFileSync('/app-data/log.txt', `${new Date().toISOString()} - ${message}\n`);
  res.send(message);
});

app.get('/talk-to-b', async (req, res) => {
  console.log('res ', req)
  try {
    const response = await axios.get('http://backend-b:4002/');
    res.send(`Backend A got response from B: "${response.data}"`);
  } catch (err) {
    console.log('tlak err ', err)
    res.status(500).send(`Error contacting Backend B ${err}`);
  }
});

app.listen(PORT, () => {
  console.log(`Backend A running on http://localhost:${PORT}`);
});