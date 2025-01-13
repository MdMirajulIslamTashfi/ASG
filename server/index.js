const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// API route example
app.get('/api', (req, res) => {
  res.send({ message: 'Hello from the Express server!' });
});

// Catch-all handler to serve React's index.html for any route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
