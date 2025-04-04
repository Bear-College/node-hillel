module.exports = function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        resolve(data);
      } catch (e) {
        resolve(body); // or return null or error
      }
    });
    req.on('error', reject);
  });
};
