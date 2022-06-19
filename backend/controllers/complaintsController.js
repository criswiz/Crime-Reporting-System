const asyncHandler = require('express-async-handler');

const Complaint = require('../models/complaintsModel');
const User = require('../models/userModel');

// @desc Get goals
// @route GET api/goals
// @access Private
const getComplaints = asyncHandler(async (req, res) => {
  const complaints = await Complaint.find({ name: req.user.id });

  res.status(200).json(complaints);
});

// @desc Set goals
// @route POST api/goals
// @access Private
const setComplaints = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const complaints = await Complaint.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(complaints);
});

// @desc Update goals
// @route PUT api/goals/:id
// @access Private
const updateComplaints = asyncHandler(async (req, res) => {
  const complaint = await Goal.findById(req.params.id);

  if (!complaint) {
    res.status(400);
    throw new Error('Goal not found');
  }

  const user = await User.findById(req.user.id);

  //Check for user
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  //Make sure the logged in user matches the goal user
  if (complaint.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedComplaint = await Complaint.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedGoal);
});

// @desc Delete goals
// @route DELETE api/goals/:id
// @access Private
const deleteComplaints = asyncHandler(async (req, res) => {
  const complaints = await Complaint.findById(req.params.id);

  if (!complaints) {
    res.status(400);
    throw new Error('Complaint not found');
  }

  const user = await User.findById(req.user.id);

  //Check for user
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  //Make sure the logged in user matches the goal user
  if (complaints.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await complaints.remove();

  res.status(200).json(req.params.id);
});

module.exports = {
  getComplaints,
  setComplaints,
  updateComplaints,
  deleteComplaints,
};
