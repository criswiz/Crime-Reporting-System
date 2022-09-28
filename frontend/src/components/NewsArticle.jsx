import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <img
        className="news_image"
        src={data.urlToImage}
        onerror="this.onerror=null; this.src='https://static.thenounproject.com/png/140281-200.png';"
        alt=""
      />
      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
    </div>
  );
}

export default NewsArticle;
