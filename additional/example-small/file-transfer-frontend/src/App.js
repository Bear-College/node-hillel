import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert('Please select a file');

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:4000/upload', formData);
      alert('File uploaded!');
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    }
  };

  const handleDownload = async () => {
    try {
      const response = await axios.get('http://localhost:4000/download', {
        responseType: 'blob'
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'downloaded-file.txt');
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error(err);
      alert('Download failed');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>File Upload and Download</h1>

      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>

      <hr />

      <button onClick={handleDownload}>Download File</button>
    </div>
  );
}

export default App;