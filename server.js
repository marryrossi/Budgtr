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
    res.render('budget_index.ejs', {
        budget, bankAccount,
    });
});

// New
app.get("/budgets/new", (req, res) => {
    res.render("new.ejs");
});

// Show
app.get("/budgets/:index", (req, res) => {
    res.render("budget_show.ejs", {
        budget : budget[req.params.index],
    });
});

app.post('/budgets', (req, res) => {
    budget.push(req.body);
    res.redirect('/budgets');
});

// Listening
app.listen(port, () => console.log(`Express is listening on Port: ${port}`))
