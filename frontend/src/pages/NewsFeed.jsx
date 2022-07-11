import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NewsFeed() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>News Feed</p>
      </section>
    </>
  );
}

export default NewsFeed;
