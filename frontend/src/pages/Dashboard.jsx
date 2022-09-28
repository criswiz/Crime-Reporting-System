import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';
import { getComplaint, reset } from '../features/complaints/complaintsSlice';
import ComplaintItem from '../components/ComplaintItem';
import { toast } from 'react-toastify';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { complaints, isLoading, isError, message } = useSelector(
    (state) => state.complaint
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (!user) {
      navigate('/login');
    }

    dispatch(getComplaint());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>These are your Complaints Filled</p>
      </section>

      <section className="content">
        {complaints.lenght > 0 ? (
          <div className="complaints">
            {complaints.map((complaint) => (
              <ComplaintItem key={complaint._id} complaint={complaint} />
            ))}
          </div>
        ) : (
          <h3>You have not lodged any complaints yet</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
