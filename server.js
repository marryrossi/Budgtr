// Dependencies
const express = require('express');
const app = express();
const port = 3000;
const budget = require('./models/budget.js')
let bankAccount = 0

// Middleware
app.use(express.urlencoded({extended: false}))

// Routes
app.get('/', (req, res) => {
  res.send('Welcome!')
});

// Index
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {
        budget, bankAccount,
    });
  });

// Listening
app.listen(port, () => console.log(`Express is listening on Port: ${port}`))
