import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = '070a40f5dd6f48e7bc3106bd5b191787';
  const newDate = new Date();
  const date = newDate.getDate();

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [date]);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
