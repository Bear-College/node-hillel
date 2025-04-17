const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');

app.use(express.json());
app.use('/api/users', usersRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
