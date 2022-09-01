const asyncHandler = require('express-async-handler');
const multer = require('multer');
const Complaint = require('../models/complaintsModel');
const User = require('../models/userModel');
const fs = require("fs");


// SET STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now());
  },
});

const upload = multer({ storage: storage });

// @desc Get complaints
// @route GET api/complaints
// @access Private
const getComplaints = asyncHandler(async (req, res) => {
  const complaints = await Complaint.find({ name: req.user.id });

  res.status(200).json(complaints);
});

// @desc Set conplaints
// @route POST api/conplaints
// @access Private
const setComplaints = asyncHandler( upload.single('complaintImage'), async (req, res) => {
    const { location, complaint } = req.body;
    const img = await fs.readFileSync(req.file.path);
    const encode_img = img.toString('base64');
    const final_img = {
        contentType:req.file.mimetype,
        image: Buffer.from(encode_img,'base64')
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
    final_img,
    function(err,result){
      if(err){
          console.log(err);
      }else{
          console.log(result.img.Buffer);
          console.log("Saved To database");
          res.contentType(final_img.contentType);
          res.send(final_img.image);
      }
  },
    user: req.user.id,
  });

  res.status(200).json(complaints);
});

// @desc Update complaints
// @route PUT api/complaints/:id
// @access Private
const updateComplaints = asyncHandler(
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

// @desc Delete complaints
// @route DELETE api/complaints/:id
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
