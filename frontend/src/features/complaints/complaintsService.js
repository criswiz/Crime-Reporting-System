import axios from 'axios';

const API_URL = 'api/complaints/';

//Create complaint
const createComplaint = async (complaintData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, complaintData, config);

  return response.data;
};

//Get User complaint
const getComplaint = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

//Delete complaint
const deleteComplaint = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL, goalId, config);

  return response.data;
};

const complaintsService = {
  createComplaint,
  getComplaint,
  deleteComplaint,
};

export default complaintsService;
