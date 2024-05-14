import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, [category]); 

  return (
    <div>
      <h1 className='text-center'>Latest <span className='badge bg-danger'>News</span></h1>
      {articles.map((news, index) => (
        <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  );
};

export default Newsboard;
