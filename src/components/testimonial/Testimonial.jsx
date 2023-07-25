import React from 'react'
import "./testimonial.css"
export default function Testimonial() {
  return (
    <div className="container-fluid testimonial">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-item-child d-flex flex-wrap align-items-center justify-content-evenly">
              
              <div className="customer d-flex flex-column align-items-center justify-content-evenly">
                <img src="customer2.jpeg" alt="customer-img" className="customer-img" />
                <div className="review p-2">I save 30-45 minutes on my daily commute. I don’t feel exausted in office 
                or end of day reaching home. This Cycle is a real gift for me.
                </div>
                <div className='float-end fw-bold align-self-end'>Baiju</div>
              </div>

              <div className="customer d-flex flex-column align-items-center justify-content-evenly">
                <img src="customer2.png" alt="customer-img" className="customer-img" />
                <div className="review p-2">I did research on all types of electric bicycles available in India and found Rango
                 E-Cycles as best value for money. Me and my family uses it for shopping at nearest market which is 5 km from our 
                 home. It helps us save money.
                </div>
                <div className='float-end fw-bold align-self-end'>Rajesh</div>
              </div>

            </div>
          </div>
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>

    </div>


  )
}

