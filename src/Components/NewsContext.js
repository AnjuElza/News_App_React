import React, { createContext, useContext, useState } from 'react';

const NewsContext = createContext();

export function useNewsContext() {
  return useContext(NewsContext);
}

export function NewsProvider({ children }) {
  const [headlines, setHeadlines] = useState([]);
  const [health, setHealth] = useState([]);
  const [business, setBusiness] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [sports, setSports] = useState([]);
  const [science, setScience] = useState([]);
  const [entertainment, setEntertainment] = useState([]);

  return (
    <NewsContext.Provider
      value={{
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
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}
