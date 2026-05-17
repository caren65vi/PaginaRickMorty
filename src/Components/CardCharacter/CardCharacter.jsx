import React from 'react'
import './CardCharacter.css';

const CardCharacter = ({ name, image, gender, species, status, location }) => {
  return (
    <div className="card">
      <img className="card-img" src={image} alt={name} />
      <div className="card-body">
        <span className="card-badge">{species || 'Unknown'}</span>
        <p className="card-name">{name}</p>
        <p className="card-location"><strong>Ubicación:</strong> {location}</p>
        <div className="card-footer">
          <img className="card-avatar" src={image} alt={name} />
          <div className="card-footer-content">
            <p className="card-footer-name">{name}</p>
            <p className="card-footer-sub">{status}· {gender}</p>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCharacter;