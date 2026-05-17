import React from 'react'
import './HomeNavigator.css'
import { GiUfo } from "react-icons/gi";
import Gallery from '../Gallery/Gallery'

const HomeNavigator = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
    <nav className="home-navigator">
      <div className="home-navigator__brand" aria-hidden>
      <GiUfo className="home-navigator__ship" />
      </div>
      <ul className="home-navigator__list">
       
        <li 
          className="home-navigator__link"
          onClick={() => scrollToSection('serial-info')}
        >
          Serie
        </li>
        <li 
          className="home-navigator__link"
          onClick={() => scrollToSection('protagonists')}
        >
          Protagonistas
        </li>
        <li 
          className="home-navigator__link"
          onClick={() => scrollToSection('antagonists')}
        >
          Antagonistas
        </li>
        <li 
          className="home-navigator__link"
          onClick={() => scrollToSection('seasons')}
        >
          Temporadas
        </li>

       <li 
          className="home-navigator__link"
          onClick={() => scrollToSection('gallery')}
        >
          Galería
        </li>
      </ul>
    </nav>
    
    </>
  );
};

export default HomeNavigator;
