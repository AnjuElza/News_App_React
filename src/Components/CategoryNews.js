import { useParams, useNavigate } from "react-router-dom";
import { useNewsContext } from './NewsContext.js';
import NewsDetails from './NewsDetails.js'; 
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import './css/CategoryNews.css';

function CategoryNews(){

const {category}= useParams();
const { headlines, business, entertainment, health, science, sports, technology } = useNewsContext();
const navigate= useNavigate();
//console.log(category);
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

    return(
<div className="main_container" style={{ marginTop: '90px' }}>
              <h1>{category.toUpperCase()}</h1>
              <Paper elevation={4} style={{ width: '94vw', margin: 'auto', padding:'2vw' }} >
              <div className="news-container">
        {articles.map((article, index) => (
           
          <div key={index}>
           <h3>{article.title}</h3>
           <p>{article.description}</p>
           <Button className="Read_More_Btn"
           onClick={() => navigate(`/news/${category}/${encodeURIComponent(article.title)}`)} // Use encodeURIComponent to handle special characters in the title
           >
             Read More... </Button>
           <hr></hr>
        </div>
        
       ))}
      </div> 
      </Paper>
      </div>
    )
}

export default CategoryNews;