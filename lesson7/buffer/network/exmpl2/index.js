const net = require('net');

const server = net.createServer(socket => {
  socket.on('data', (chunk) => {
    console.log('Отримано Buffer:', chunk);
    console.log('Як текст:', chunk.toString());
  });

  socket.write('Привіт з сервера!');
});

server.listen(4000, () => console.log('TCP сервер на порту 4000'));
