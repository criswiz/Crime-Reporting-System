const mongoose = require('mongoose');

const complaintSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    location: {
      type: String,
      require: [true, 'Please add location'],
    },
    complaint: {
      type: String,
      require: [true, 'Please add a complaint'],
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Complaints', complaintSchema);
