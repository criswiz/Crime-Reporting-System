import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComplaint } from '../features/complaints/complaintsSlice';

function ComplaintForm() {
  const [formData, setFormData] = useState({
    location: '',
    complaint: '',
  });

  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });

  const { location, complaint } = formData;
  const { userImage } = userInfo.file;

  const dispatch = useDispatch();

  //fetch data inputted into the form
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleInputChange = (event) => {
    setuserInfo({
      ...userInfo,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };
  //On Submit function
  const onSubmit = (e) => {
    e.preventDefault();

    const userComplaint = {
      formData,
      userImage,
    };

    dispatch(createComplaint({ userComplaint }));
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={onChange}
            placeholder="Enter location"
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            name="complaint"
            id="complaint"
            value={complaint}
            onChange={onChange}
            placeholder="Type your Complaint"
          />
        </div>
        <div className="form">
          <div className="form-row">
            <label className="text-white">Select Image :</label>
            <input
              type="file"
              className="form-control"
              name="upload_file"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            File Complaint
          </button>
        </div>
      </form>
    </section>
  );
}

export default ComplaintForm;
