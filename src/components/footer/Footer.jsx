import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="container-fluid " id="footer">
      <footer className="d-flex flex-wrap justify-content-evenly  py-4  my-0 border-top">
        <div className="d-flex flex-wrap col-md-3 footer-child-1">
          <div className='align-self-start'><h4 >RANGO E-CYCLES</h4></div>
          <p> Best in class electric cycles to meet your everyday needs, keeps you fit, save your money and helps the environment.</p>
        </div>
        <div className="d-flex flex-wrap col-md-3 footer-child-2">
          <div className='align-self-start'><h4 >REGISTERED ADDRESS</h4></div>
          <p> Opposite Pillar No 300, Digha Sonepur Bridge Link (Nahar) Road, Digha, Patna 800018</p>
        </div>
        <div className="d-flex flex-column nav col-md-3 align-items-center footer-child-3">
          <div className='footer-right my-1'><span className='footer-right-right'>rangocycles@gmail.com</span></div>
          <div className='footer-right my-1'> <span className='footer-right-right'>7667189733</span></div>
          <div className='footer-right my-1'>
            <span className="d-flex nav justify-content-center footer-right-right">
              <li className="ms-3"><a className="text-body-secondary" href="https://twitter.com/pdpro1/status/1568647764745277441" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size='lg' /></a></li>
              <li className="ms-3"><a className="text-body-secondary" href="https://www.instagram.com/rango_ecycles/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size='lg' /></a></li>
              <li className="ms-3"><a className="text-body-secondary" href="https://www.facebook.com/rangoecyclespatna" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size='lg' /></a></li>
              <li className="ms-3"><a className="text-body-secondary" href="https://www.youtube.com/@rango_ecycles" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} size='lg' /></a></li>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}


