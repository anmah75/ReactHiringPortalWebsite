const express = require('express');
const app = express();
const port = 3001; // Ensure this port is not conflicting with your React app

const fs = require('fs');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Serve candidates data
app.get('/api/candidates', (req, res) => {
  fs.readFile(path.join(__dirname, 'public', 'candidates.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading candidates data');
    } else {
      res.send(JSON.parse(data));
    }
  });
});

// Serve shortlisted candidates data
app.get('/api/shortlisted-candidates', (req, res) => {
  fs.readFile(path.join(__dirname, 'public', 'shortlistedCandidates.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading shortlisted candidates data');
    } else {
      res.send(JSON.parse(data));
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
