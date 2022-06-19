const mongoose = require('mongoose');

const complaintSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    text: {
      type: String,
      require: [true, 'Please add date'],
    },
    text: {
      type: String,
      require: [true, 'Please add location'],
    },
    text: {
      type: String,
      require: [true, 'Please add reference number'],
    },
    text: {
      type: String,
      require: [true, 'Please add a complaint'],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model('Complaints', complaintSchema);
