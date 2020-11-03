const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  propertyId: {
    type: String,
    unique: true,
    required: true,
  },
  propertyName: {
    type: String,
    required: true,
  },
  income: {
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
  },
  expense: {
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
  },
});

module.exports = mongoose.model('Property', PropertySchema);
