const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
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

IncomeSchema.virtual('property', {
  ref: 'Property',
  localField: '_id',
  foreignField: 'income',
  justOne: false,
});

module.exports = mongoose.model('Income', IncomeSchema);
