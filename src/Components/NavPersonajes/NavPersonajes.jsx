            
import React from 'react'
import { GiUfo } from 'react-icons/gi'
import './NavPersonajes.css'

const NavPersonajes = ({ value, onChange, onSubmit, placeholder = 'Buscar personaje por nombre...' }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit()
    }
  }

  return (
    <nav className="nav-personajes">
      <div className="nav-personajes__inner">
        <div className="nav-personajes__brand">
          <GiUfo className="nav-personajes__icon" aria-hidden="true" />
          <span>Buscar personaje</span>
        </div>

        <div className="nav-personajes__search">
          <div className="nav-personajes__field">
            <input
              id="personaje-search"
              className="nav-personajes__input"
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onKeyDown={handleKeyDown}
            />
            <button
              className="nav-personajes__button"
              type="button"
              onClick={onSubmit}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavPersonajes

