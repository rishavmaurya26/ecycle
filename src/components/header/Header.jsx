import React from 'react'
import { Link } from 'react-router-dom';
import "./header.css"
export default function Header()
{
    return(
        <div className="header m-0">
            <nav class="navbar navbar-expand-lg bg-body-tertiary" id="header" >
    <div class="container-fluid">
      <img src="logo.png" alt="" style={{height:"60px",width:"100px"}} />
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link active text-light" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-light" to="/about">About</Link>
        </li>
        {/* <li class="nav-item">
        <Link class="nav-link active" to="/contact">Contact</Link>
        </li> */}
        {/* <li class="nav-item">
        <Link class="nav-link active" to="/register">Sign in</Link>
        </li> */}
      </ul>
    </div>
    </div>
  </nav>
        </div>
        
        
    )
}