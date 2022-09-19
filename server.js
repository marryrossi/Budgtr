// Dependencies
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({extended: false}))

// Routes
app.get('/', (req, res) => {
  res.send('Welcome!')
});

// Listening
app.listen(port, () => console.log(`Express is listening on Port: ${port}`))
