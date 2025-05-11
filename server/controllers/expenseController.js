const Expense = require('../models/Expense');

const addExpense = async (req, res) => {
  try {
    const { title, amount, category } = req.body;

    const newExpense = new Expense({ title, amount, category });
    const saved = await newExpense.save();

    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { addExpense };
