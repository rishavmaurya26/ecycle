import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

import './finance.css'

// const ImageGallery = () => {
export default function ImageGallery()
{
    return (
        // <div className="image-gallery">
        <div>
            <Header></Header>
            <img src="https://drive.google.com/file/d/1CAO6iSWKoOKJ3RdS6NUE1Otof8DDhelr/view?usp=sharing" alt="HDFC Finance" className="gallery-image" />
            <img src="https://drive.google.com/file/d/1o0qPBwjC9rQLlyXRQ3m33ZBW9J5UXjZQ/view?usp=sharing" alt="Shopse" className="gallery-image" />
            <img src="https://drive.google.com/file/d/1VfPJ1S8xRnQ0bJMtSq7QT1hhXs3EvftY/view?usp=sharing" alt="Bajaj Finserv" className="gallery-image" />
        <Footer></Footer>
        </div>
    )
}

// export default ImageGallery;

