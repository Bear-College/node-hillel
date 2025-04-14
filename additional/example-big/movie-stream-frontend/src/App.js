import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>Stream 10GB Movie</h1>
      <video
        width="720"
        height="400"
        controls
        style={{ border: '1px solid #ccc' }}
      >
        <source src="http://localhost:4000/movie" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;