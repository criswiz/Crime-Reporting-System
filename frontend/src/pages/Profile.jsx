import '../index.css';
import { useSelector } from 'react-redux';

function Profile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="profile">
      <h1 className="news__title">Username: {user && user.name}</h1>
      <p className="news__desc">Email: {user && user.name}</p>
      <p className="news__desc">Ghana card Number: {user && user.name}</p>
      <p className="news__desc">Complaints {user && user.name}</p>
    </div>
  );
}

export default Profile;
