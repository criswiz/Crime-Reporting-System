const mongoose = require('mongoose');

const complaintSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add name'],
    },
    email: {
      type: String,
      required: [true, 'Please add email'],
      unique: true,
    },
    ghcard: {
      type: String,
      required: [true, 'Please add Ghana Card Number'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add password'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Complaints', complaintSchema);
