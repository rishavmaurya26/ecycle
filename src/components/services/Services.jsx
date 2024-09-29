import React from 'react'
import { Link } from 'react-router-dom'
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
                            <Link to="/bike_catalog" class="btn btn-success">Explore</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src="accessories.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Components pricing</h5>
                            <p className="card-text"> Buy electric components such as motors, battery, sensors etc.</p>
                            <Link to="/Part_catalog" class="btn btn-success">Explore</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src="bike_customize.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Service your electric cycle</h5>
                            <p className="card-text">Get your cycle serviced.</p>
                            <Link to="/about" class="btn btn-secondary disabled">Explore</Link>

                        </div>
                    </div>
            </div>
        </div>
    )
}
