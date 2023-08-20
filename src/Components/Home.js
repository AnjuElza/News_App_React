import React from 'react';
 import {useState, useEffect} from 'react'; 
 import {useNavigate, useLocation} from 'react-router-dom';
 import AppBar from '@mui/material/AppBar';
 import Box from '@mui/material/Box';
 import Toolbar from '@mui/material/Toolbar';
 import Typography from '@mui/material/Typography';
 import Container from '@mui/material/Container';
 import Button from '@mui/material/Button';
 import { useNewsContext } from './NewsContext.js';
// import './App.css';

function FetchNews() {
  const { pathname } = useLocation(); 
  const {
    headlines,
    health,
    business,
    technology,
    sports,
    science,
    entertainment,
    setHeadlines,
    setHealth,
    setBusiness,
    setTechnology,
    setSports,
    setScience,
    setEntertainment,
  } = useNewsContext();
  const navigate= useNavigate();

    const fetchNews = async (category) =>{
    try {
      let res;
      if(category === "headlines"){
         res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=c0f2a01605be4c75847f93e89c5da5c9');
      }else{
       res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=c0f2a01605be4c75847f93e89c5da5c9`);
      }
      const data = await res.json();
      if (data.articles && Array.isArray(data.articles)) {
        switch (category) {
          case 'headlines':
            setHeadlines(data.articles);
            break;
          case 'business':
            setBusiness(data.articles);
            break;
          case 'entertainment':
            setEntertainment(data.articles);
            break;
          case 'health':
            setHealth(data.articles);
            break;
          case 'science':
            setScience(data.articles);
            break;
          case 'sports':
            setSports(data.articles);
            break;
          case 'technology':
            setTechnology(data.articles);
            break;
          default:
            console.error(`Invalid category: ${category}`);
        }
      } else {
        console.error("Invalid API response:", data);
      }
    } catch (error) {
      console.error("Error fetching headlines:", error);
    }
  }
  // useEffect(() => {
  //   console.log('Fetching headlines...');
  //   // Fetch headlines when the component mounts
  //   if (pathname === '/' && headlines.length === 0) {
  //     fetchNews('headlines');
  //   }
  // }, [pathname, headlines]);
  useEffect(() => {
    // Fetch headlines when the component mounts
    handleCategoryClick('headlines');
  }, []); 

  const handleCategoryClick = (category) => {
    // Fetch news for the clicked category
    fetchNews(category);
    navigate(`CategoryNews/${category}`)
  }
  
  return (
    <><div className="navbar">

      <AppBar className='navbar' position="fixed" style={{ backgroundColor: 'white', zIndex: 1000  }}
        sx={{ height: '90px', display: 'flex', justifyContent: 'center' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="name_container">

              <Typography variant="h4" noWrap component="a" sx={{
                fontFamily: 'Source Sans Pro, sans-serif',
                fontWeight: 600,
                fontSize: '1.5rem',
                color: 'black',
                textDecoration: 'none',
              }}>

                News Capsule
              </Typography>
            </div>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                <Button sx={{ mx: 2, color: 'black' }} onClick={() => handleCategoryClick('headlines')}>
                  Home
                </Button>

                <Button sx={{ mx: 2, color: 'black' }} onClick={() => handleCategoryClick('business')}>
                  Business
                </Button>
                <Button sx={{ mx: 2, color: 'black' }} onClick={() => handleCategoryClick('entertainment')}>
                  Entertainment
                </Button>
                <Button sx={{ mx: 2, color: 'black' }} onClick={() => handleCategoryClick('health')}>
                  Health
                </Button>
                <Button sx={{ mx: 2, color: 'black' }} onClick={() => handleCategoryClick('science')}>
                  Science
                </Button>
                <Button sx={{ mx: 2, color: 'black' }} onClick={() => handleCategoryClick('sports')}>
                  Sports
                </Button>
                <Button sx={{ mx: 2, color: 'black' }} onClick={() => handleCategoryClick('technology')}>
                  Technology
                </Button>

              </Box>

            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
    {/* <div className="main_container" style={{ marginTop: '90px' }}>
    {pathname === '/' && (
              <><h1>Headlines</h1><div>
            {headlines.map((article, index) => (
              <div key={index}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            ))}
          </div></> 
    )}
      </div> */}
</>


  )
}


export default FetchNews;