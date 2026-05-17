import React from 'react'
import './SerialInformation.css'

export const SerialInformation = () => {
  return (
    <main>
    <div className="ContainerTitle">
      <h1>Rick and Morty</h1>
    </div>
    <section className="ContainerPhoto">
      <img
        src="https://static.wikia.nocookie.net/wiki-de-rick-morty/images/2/26/Rick_y_Morty_Temporada_2.jpg/revision/latest?cb=20200606131609&path-prefix=es"
        alt="imagen de rick and morty temporada 2"
      />
    </section>
    <section className="contenido">
      <h3>Contenido Destacado</h3>
      <p>
        <strong>Rick and Morty</strong> es una serie de la television
        estaunidense de animacion para adultos creada por
        <strong> Justin Roiland </strong> y <strong> Dan Harmon. </strong>
        La serie sigue las aventuras de un cientifico alcoholico, rick y su
        facilmente influencia nieto, Morty, quienes pasan el tiempo vida
        domestica familiar y los viajes espaciales intergalacticos.
        Actualmente la serie cuenta con 9 temporadas
      </p>
    </section>
  </main>
  )
}
