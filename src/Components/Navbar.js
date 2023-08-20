import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FetchNews from './Home.js';
 import {useState, useEffect} from 'react'; 
// import './css/Header.css';
// import Logo from "../constants/images/logo.jpg";


function Navbar(){

 
  
    return(
          
            <AppBar className='navbar' position="fixed"  style={{ backgroundColor: 'white' }}
            sx={{ height: '90px', display: 'flex', justifyContent: 'center' }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="logo_name_container">
                <div className="photo">
    {/* <img src={Photo} alt="Anju" height={50} width={50} /> */}
    {/* <img src={Logo} alt="Logo" height={60} width={60} /> */}
  </div>
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
                  <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  
                  <Button sx={{ mx: 2, color: 'black' }} >
                      Home
                  </Button>
                     
                      <Button sx={{ mx: 2, color: 'black' }} onClick={GetCategoryNews('Business')}>
                      Business
                        </Button>
                        <Button sx={{ mx: 2, color: 'black' }}>
                      Entertainment
                        </Button>
                      <Button sx={{ mx: 2, color: 'black' }}>
                      Health
                        </Button>
                        <Button sx={{ mx: 2, color: 'black' }}>
                      Science
                        </Button>
                        <Button sx={{ mx: 2, color: 'black' }}>
                      Sports 
                        </Button>
                      <Button sx={{ mx: 2, color: 'black' }}>
                      Technology
                        </Button>
                   
                  </Box>
                 
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
          
    )
}
function GetCategoryNews({ category }) {
  useEffect(() => {
    FetchNews(category);
  }, [category]); 
}
export default Navbar;