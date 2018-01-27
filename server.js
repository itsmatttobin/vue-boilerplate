const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

// Middleware to support Vue Router's HTML5 history mode 
app.use(history());

// Set the static path to serve assets - './'
app.use(express.static(path.join(__dirname)));

app.listen(8000, () => {
  console.log('Server running on port 8000...');
});