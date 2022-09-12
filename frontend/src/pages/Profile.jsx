import '../index.css';
import { useSelector } from 'react-redux';

function Profile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="profile">
      <h1 className="news__title">Username: {user && user.name}</h1>
      <p className="news__desc">Email: {user && user.email}</p>
      <p className="news__desc">Ghana card Number: {user && user.ghcard}</p>
      <p className="news__desc">Complaints: 0 complaints lodged</p>
    </div>
  );
}

export default Profile;
