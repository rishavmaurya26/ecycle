import React from 'react'
import "./services.css"

export default function Services() {
    return (
        <div className='container-fluid  py-2' id="items">
            <div><h3>Our Services</h3></div>
            <div className="services d-flex align-items-center justify-content-evenly">
                    <div className="card">
                        <img src="cycle.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Bike pricing</h5>
                            <p className="card-text">Buy electic bikes from the best brands available.</p>
                        </div>
                        <a className='stretched-link' href="http://localhost:3000/bike_catalog">.</a>
                    </div>
             

             
                    <div className="card">
                        <img src="bike_customize.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Convert your cycle into electric cycle</h5>
                            <p className="card-text">Bring your normal cycle and get it converted into electric cycle as per your requirements.</p>

                        </div>
                    </div>
                
                    <div className="card">
                        <img src="accessories.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Components pricing</h5>
                            <p className="card-text"> Buy electric components such as motors, battery, sensors etc.</p>
                        </div>
                        <a className='stretched-link' href="http://localhost:3000/component_catalog">.</a>
                    </div>
                
            </div>
        </div>
    )
}
