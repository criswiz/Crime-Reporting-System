import { useDispatch } from 'react-redux';
import { deleteComplaint } from '../features/complaints/complaintsSlice';

function ComplaintItem({ complaint }) {
  const dispatch = useDispatch();

  return (
    <div className="complaint">
      <div>{new Date(complaint.createdAt).toLocaleString('en-US')}</div>
      <h3>{complaint.text}</h3>

      <button
        onClick={() => dispatch(deleteComplaint(complaint._id))}
        className="close"
      >
        x
      </button>
    </div>
  );
}

export default ComplaintItem;
