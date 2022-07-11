const asyncHandler = require('express-async-handler');
const multer = require('multer');
const Complaint = require('../models/complaintsModel');
const User = require('../models/userModel');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '_' + Date.now());
  },
});

const upload = multer({ storage: storage });

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
  const { location, complaint } = req.body;
  const img = {
    image: {
      data: fs.readFileSync(
        path.join(__dirname + '/uploads/' + req.file.filename)
      ),
      contentType: 'image/png',
    },
  };

  if (!location || !complaint || !img) {
    res.status(400);
    throw new Error(
      'Please input date, location and a description of incident'
    );
  }

  const complaints = await Complaint.create({
    location,
    complaint,
    img,
    user: req.user.id,
  });

  res.status(200).json(complaints);
});

// @desc Update goals
// @route PUT api/goals/:id
// @access Private
const updateComplaints = asyncHandler(
  upload.single('image'),
  async (req, res) => {
    const complaints = await Complaint.findById(req.params.id);

    if (!complaints) {
      res.status(400);
      throw new Error('Complaint not found');
    }

    //Check for user
    if (!req.user) {
      res.status(401);
      throw new Error('User not found');
    }

    //Make sure the logged in user matches the goal user
    if (complaints.user.toString() !== req.user.id) {
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
    res.status(200).json(updatedComplaint);
  }
);

// @desc Delete goals
// @route DELETE api/goals/:id
// @access Private
const deleteComplaints = asyncHandler(async (req, res) => {
  const complaints = await Complaint.findById(req.params.id);

  if (!complaints) {
    res.status(400);
    throw new Error('Complaint not found');
  }

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  //Make sure the logged in user matches the goal user
  if (complaints.user.toString() !== req.user.id) {
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
