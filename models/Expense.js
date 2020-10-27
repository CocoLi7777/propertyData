const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  January: {
    type: Number,
  },
  February: {
    type: Number,
  },
  March: {
    type: Number,
  },
  April: {
    type: Number,
  },
  May: {
    type: Number,
  },
  June: {
    type: Number,
  },
  July: {
    type: Number,
  },
  August: {
    type: Number,
  },
  September: {
    type: Number,
  },
  October: {
    type: Number,
  },
  November: {
    type: Number,
  },
  December: {
    type: Number,
  },
});

ExpenseSchema.virtual('property', {
  ref: 'Property',
  localField: '_id',
  foreignField: 'expense',
  justOne: false,
});

module.exports = mongoose.model('Expense', ExpenseSchema);
