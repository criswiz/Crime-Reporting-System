import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComplaint } from '../features/complaints/complaintsSlice';

function UpdateUserDetails() {
  const [formData, setFormData] = useState({
    ghcard: '',
    password: '',
  });

  const { ghcard, password } = formData;

  const dispatch = useDispatch();

  //fetch data inputted into the form
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //On Submit function
  const onSubmit = (e) => {
    e.preventDefault();

    const userDetails = {
      formData,
    };

    dispatch(createComplaint({ userDetails }));
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="ghcard"
            id="ghcard"
            value={ghcard}
            onChange={onChange}
            placeholder="Enter Ghana Card Details"
          />
        </div>
        <div className="form-group">
          <textarea
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
            placeholder="Passord"
          />
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

export default UpdateUserDetails;
