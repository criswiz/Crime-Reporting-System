import { useSelector } from 'react-redux';
import React from 'react';
import { NewsContextProvider } from '../NewsContext';
import News from '../components/News';

function NewsFeed() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>News Feed</p>
      </section>

      <NewsContextProvider>
        <News />
      </NewsContextProvider>
    </>
  );
}

export default NewsFeed;
