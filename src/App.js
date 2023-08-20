import React from 'react';
 import {useState, useEffect} from 'react'; 
 import {Routes, Route, Link} from 'react-router-dom' 
 import FetchNews from './Components/Home.js';
 import CategoryNews from './Components/CategoryNews.js';
 import NewsDetails from './Components/NewsDetails.js'; 
 import { NewsProvider } from './Components/NewsContext.js';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FetchNews/>} />
        <Route path="/CategoryNews/:category" element={<CategoryNews />} />
        <Route path="/news/:category/:title" element={<NewsDetails />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
     < FetchNews />
      
    </div>
  );
}
function NotFound(){
  return(
    <div>
      <h1>404 Not Found</h1>
    </div>
  )
}
export default App;

