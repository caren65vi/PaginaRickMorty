import React from 'react'
import './Header.css'
import { EXTERNAL_ANCHOR_PROPS } from '../../utils/externalLinks'

const MARATHON_URL = 'https://www26.pelisplushd.to/serie/rick-y-morty'

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="rime-row">Maratón Rick y Morty</h1>
        <p>Disfruta de los mejores personajes y episodios con estilo.</p>
        <a
          className="header__cta"
          href={MARATHON_URL}
          {...EXTERNAL_ANCHOR_PROPS}
        >
          MARATON GRATUITA
        </a>
      </div>
    </header>
  )
}

export default Header