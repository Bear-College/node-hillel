const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  ws.on('message', (data) => {
    if (Buffer.isBuffer(data)) {
      console.log('Прийшов Buffer:', data);
      console.log('Base64:', data.toString('base64'));
    } else {
      console.log('Прийшов текст:', data.toString());
    }
  });

  ws.send('Ти підключився!');
});
