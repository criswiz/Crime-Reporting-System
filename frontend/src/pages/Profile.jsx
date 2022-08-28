import '../index.css';
import { useSelector } from 'react-redux';

function Profile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="news">
      <h1 className="news__title">Username: {user && user.name}</h1>
      <p className="news__desc"></p>
      <span className="news__author"></span> <br />
      <span className="news__published"></span>
      <span className="news__source"></span>
    </div>
  );
}

export default Profile;
