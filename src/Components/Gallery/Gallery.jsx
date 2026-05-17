import React from 'react'
import './Gallery.css'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

const Gallery = () => {
    return (
        <div className="gallery-container">
            <h2 className="gallery-title">Viajes a Través del Multiverso</h2>
            <CCarousel id="gallery" transition="crossfade" className="gallery" controls>
            <CCarouselItem>
                <CImage className="d-block w-100" src={'https://static.wikia.nocookie.net/rick-y-morty-espanol/images/3/39/Site-community-image/revision/latest?cb=20230321051209&path-prefix=es'} alt="foto de la serie rick y morty" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2c7_3syg-GNFIvZrlLLiF2jnTvZ_ggep42g&s'} alt="rick y morty en una dimensión" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={'https://elcomercio.pe/resizer/v2/KRKOINCP7JGR7KWT4HNBDSJPDA.jpg?auth=8a023522ad969a505c109d936b7e56d4948d7b7e88b9df5ec736e46b8db0d567&width=1200&height=800&quality=75&smart=true'} alt="rick en una plantilla de prision" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRo_mnIY0V77p-93_vV65TJJGzQmAUHiYHgg&s'} alt="es rick es loco" />
            </CCarouselItem>
        </CCarousel>
        </div>
    )
}

export default Gallery
