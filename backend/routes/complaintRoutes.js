const express = require('express');
const router = express.Router();
const {
  getComplaints,
  setComplaints,
  updateComplaints,
  deleteComplaints,
} = require('../controllers/complaintsController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getComplaints).post(protect, setComplaints);

router
  .route('/:id')
  .put(protect, updateComplaints)
  .delete(protect, deleteComplaints);

module.exports = router;
