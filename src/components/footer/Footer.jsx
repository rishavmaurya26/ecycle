import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"
// import face  from "react-icons"
export default function Footer()
{
    // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <div className="container-fluid" id="footer">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 my-0 border-top">
    <div className="d-flex col-md-3  footer-child"> 
    <p> © 2022 Company, Inc</p>
    {/* <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a className="text-muted"></a></li>
      <li class="ms-3"><a className="text-muted"></a></li>
      <li class="ms-3"><a className="text-muted"></a></li>
    </ul> */}
    </div>
    <div className="d-flex nav col-md-3  footer-child">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-dark">Home</Link></li>
      {/* <li className="nav-item"><Link className="nav-link px-2 text-dark">Contact</Link></li> */}
      <li className="nav-item"><Link to="/about" className="nav-link px-2 text-dark">About</Link></li>
    </div>
    <div className="d-flex flex-column nav col-md-3 align-items-center justify-content-center  footer-child">
        <div className='footer-right my-1'><span className='footer-right-left'>Email</span> <span className='footer-right-right'>prasanndutt@botanytronics.com</span></div>
        <div className='footer-right my-1'><span className='footer-right-left'>Phone</span> <span className='footer-right-right'>91+7324855901</span></div>
        <div className='footer-right my-1'><span className='footer-right-left'>Address</span> <span className='footer-right-right'>Rukanpura, Digha, Danapur</span></div>
    </div>
  </footer>
</div>
    )
}