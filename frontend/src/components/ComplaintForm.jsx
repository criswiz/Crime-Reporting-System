import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComplaint } from '../features/complaints/complaintsSlice';

function ComplaintForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createComplaint({ text }));
    setText('');
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Complaint</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
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

export default ComplaintForm;
