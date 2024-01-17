import React from 'react'
import { Link } from 'react-router-dom';
import "./header.css"
export default function Header()
{
    return(
        <div className="header m-0">
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id="header" >
    <div className="container-fluid">
      <img src="https://rango-ecycle.netlify.app/logo.png" alt="" style={{height:"60px",width:"100px"}} />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active text-light" to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active text-light" to="/bloglist">Blogs</Link>
        </li>
         <li className="nav-item">
        <Link className="nav-link active text-light" to="/register">Sign In</Link>
        </li>
      </ul>
    </div>
    </div>
  </nav>
        </div>
        
        
    )
}