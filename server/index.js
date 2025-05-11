const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Expense Model
const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now }
});
const Expense = mongoose.model('Expense', expenseSchema);

// Add Expense Controller (POST)
const addExpense = async (req, res) => {
  try {
    const { title, amount, category } = req.body;

    const newExpense = new Expense({ title, amount, category });
    const savedExpense = await newExpense.save();

    res.status(201).json(savedExpense); // Send back the saved expense
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// Get All Expenses Controller (GET)
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find(); // Find all expenses
    res.status(200).json(expenses); // Send back the list of expenses
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// Update Expense Controller (PUT)
const updateExpense = async (req, res) => {
  try {
    const { id } = req.params; // Get expense ID from URL
    const { title, amount, category } = req.body; // Get new values from request body

    const updatedExpense = await Expense.findByIdAndUpdate(
      id, 
      { title, amount, category },
      { new: true } // Return the updated expense
    );

    if (!updatedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.status(200).json(updatedExpense); // Return updated expense
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// Delete Expense Controller (DELETE)
const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params; // Get expense ID from URL

    const deletedExpense = await Expense.findByIdAndDelete(id);

    if (!deletedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'BudgetBuddy API running' }); // Check API status
});

app.post('/api/expenses', addExpense);  // POST route to add expense
app.get('/api/expenses', getExpenses);  // GET route to retrieve all expenses
app.put('/api/expenses/:id', updateExpense);  // PUT route for updating expense
app.delete('/api/expenses/:id', deleteExpense); // DELETE route for deleting expense

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
