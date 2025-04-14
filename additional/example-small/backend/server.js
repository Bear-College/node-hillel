const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // make sure this folder exists
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); // preserves original filename + extension
    }
  });
  
  const upload = multer({ storage });

// Upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
  console.log('File received:', req.file);
  res.json({ message: 'File uploaded successfully' });
});

// Download endpoint
app.get('/download', (req, res) => {
  const filePath = path.join(__dirname, 'downloads/sample.txt');
  const fileName = 'downloaded-file.txt';

  res.download(filePath, fileName, err => {
    if (err) {
      res.status(500).send('Error sending file');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});