const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Placeholder route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Omniscient AI Customer Service API' });
});

// Placeholder routes for main features
app.use('/api/chat', (req, res) => res.json({ message: 'Chatbot endpoint' }));
app.use('/api/advice', (req, res) => res.json({ message: 'Financial advice endpoint' }));
app.use('/api/loan', (req, res) => res.json({ message: 'Loan renewal endpoint' }));
app.use('/api/goals', (req, res) => res.json({ message: 'Goal setting endpoint' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
