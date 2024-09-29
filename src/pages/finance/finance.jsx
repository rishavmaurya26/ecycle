import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

import './finance.css'

// const ImageGallery = () => {
export default function ImageGallery()
{
    return (  
        <div>
            <Header></Header>
         <div className="image-gallery">
            <div className="card my-2 gallery-image">
                    <img src="https://rango-ecycle.netlify.app/Bajaj.png" className="card-img-top" alt="..." />
                    {/* <img src={`https://rango-ecycle.netlify.app/${element.image}`} className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                        <p>
                        Bajaj Finance for eligible customers who are already having active Bajaj EMI card.
                        </p>
                    </div>
               </div>
               <div className="card my-2 gallery-image">
                   <img src="https://rango-ecycle.netlify.app/shopse.png" className="card-img-top" alt="..." />
                   {/* <img src={`https://rango-ecycle.netlify.app/${element.image}`} className="card-img-top" alt="..." /> */}
                   <div className="card-body">
                       <p>
                       Second should be Shopse, credit card payment through shopse web link. Customer can get 3 & 6 month NO COST EMI option.
                       </p>
                   </div>
               </div>
               <div className="card my-2 gallery-image"> 
                    <img src="https://rango-ecycle.netlify.app/hdfc.png" className="card-img-top" alt="..." />
                    {/* <img src={`https://rango-ecycle.netlify.app/${element.image}`} className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                        <p>
                        Bajaj Finance for eligible customers who are already having active Bajaj EMI card.
                        </p>
                    </div>
               </div>
              
         </div>
        <Footer></Footer>
        </div>     
        
   
    )
}

// export default ImageGallery;

