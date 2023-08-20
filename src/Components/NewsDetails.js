import React, { createContext, useContext } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useNewsContext } from './NewsContext.js';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function NewsDetails(){
    const {category,title}= useParams();
    const { headlines, business, entertainment, health, science, sports, technology } = useNewsContext();

    let articles = [];
  
  // Based on the category, assign the appropriate state variable to 'articles'
  switch (category) {
    case 'headlines':
        articles = headlines;
            break;
    case 'business':
      articles = business;
      break;
    case 'entertainment':
      articles = entertainment;
      break;
    case 'health':
      articles = health;
      break;
    case 'science':
      articles = science;
      break;
    case 'sports':
      articles = sports;
      break;
    case 'technology':
      articles = technology;
      break;
    default:
      articles = [];
  }
  const article = articles.find((article) => article.title === title);

  const OpenUrl = (url) => {
    window.open(url, '_blank');
  };
  
    return(


<div className="news-details" style={{ marginTop: '100px' }}>
             
              <Paper elevation={4} style={{ width: '94vw', margin: 'auto', padding:'2vw' }} >

      <h2>{article.title}</h2>
      <p>{article.publishedAt}</p>
      <p>{article.description}</p>
      
      <p>{article.content}</p>
      <p>{article.url}</p>
    
     <Button onClick={() => OpenUrl(article.url)}>Read Article</Button>
     </Paper>
    </div>
    )
}

export default NewsDetails;