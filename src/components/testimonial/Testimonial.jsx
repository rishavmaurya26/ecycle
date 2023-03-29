import React from 'react'
import "./testimonial.css"
export default function Testimonial()
{

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   touch: false
// })
    return(
        <div className="container-fluid testimonial">
            <div id="carouselExample" class=" d-flex flex-row align-item-center justify-content-center carousel slide">
<div class="carousel-inner">
  <div class="carousel-item active">
  <div className="d-flex flex-row flex-wrap carousel-item-child">
      <img src= "customer.jpg" alt="customer-img" className="customer-img"/>
      <div className="review p-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore itaque, blanditiis sapiente optio eos expedita harum soluta 
      sed? Veritatis corporis quia in temporibus, ratione consequuntur nihil eaque incidunt nostrum vitae!</div>
    </div>
  </div>
  <div class="carousel-item">
    <div className="d-flex flex-row flex-wrap carousel-item-child">
      <img src="customer.jpg" alt="customer-img" className="customer-img"/>
      <div className="review p-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore itaque, blanditiis sapiente optio
       eos expedita harum soluta sed? Veritatis corporis quia in temporibus, ratione consequuntur nihil eaque incidunt nostrum vitae!</div>
    </div>
  </div>
  <div class="carousel-item">
  <div className="d-flex flex-row flex-wrap carousel-item-child">
      <img src="customer.jpg" alt="customer-img" className="customer-img"/>
      <div className="review p-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore itaque, blanditiis sapiente optio 
      eos expedita harum soluta sed? Veritatis corporis quia in temporibus, ratione consequuntur nihil eaque incidunt nostrum vitae!</div>
    </div>
  </div>
</div>
<button class="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
  <span class="carousel-control-prev-icon " aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next " type="button" data-bs-target="#carouselExample" data-bs-slide="next">
  <span class="carousel-control-next-icon " aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>
</div>


    )
}