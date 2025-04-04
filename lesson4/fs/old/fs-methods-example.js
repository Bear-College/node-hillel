
const fs = require('fs');
const path = require('path');

// Create a new folder
fs.mkdir('test-folder', { recursive: true }, (err) => {
  if (err) throw err;
  console.log('📁 test-folder created.');

  // Create a file inside it
  const filePath = path.join('test-folder', 'example.txt');
  fs.writeFileSync(filePath, 'Hello, world!');
  console.log('📝 File created.');

  // Check if file exists
  if (fs.existsSync(filePath)) {
    console.log('✅ File exists.');
  }

  // Get file stats
  fs.stat(filePath, (err, stats) => {
    if (err) throw err;
    console.log('📊 File size:', stats.size, 'bytes');

    // Copy the file
    const copyPath = path.join('test-folder', 'example-copy.txt');
    fs.copyFile(filePath, copyPath, (err) => {
      if (err) throw err;
      console.log('📄 File copied.');

      // Rename the copied file
      const renamedPath = path.join('test-folder', 'example-renamed.txt');
      fs.rename(copyPath, renamedPath, (err) => {
        if (err) throw err;
        console.log('✏️ File renamed.');

        // Read directory contents
        fs.readdir('test-folder', (err, files) => {
          if (err) throw err;
          console.log('📂 Directory contents:', files);

          // Delete original file
          fs.unlink(filePath, (err) => {
            if (err) throw err;
            console.log('❌ Original file deleted.');

            // Remove folder (must be empty)
            fs.unlink(renamedPath, (err) => {
              if (err) throw err;
              fs.rmdir('test-folder', (err) => {
                if (err) throw err;
                console.log('🧹 Folder removed.');
              });
            });
          });
        });
      });
    });
  });
});
