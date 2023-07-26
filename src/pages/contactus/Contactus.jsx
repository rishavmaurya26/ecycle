import React from "react";
import './contactUs.css';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Iframe from 'react-iframe'
export default function Contactus() {
    return (
        <div className="contactuscontainer">
            <Header></Header>
            <div className="midbody d-flex align-items-center py-5">
                <div className="leftportion d-flex flex-column align-items-center justify-content-around">
                    <div className="d-flex flex-column nav col-md-3 justify-content-around align-items-center">
                    <h2 className="my-2 text-decoration-underline">Our Contact Info</h2>
                        <div className="lh-lg"> Opposite Pillar No 300, Digha Sonepur Bridge Link (Nahar) Road, Digha, Patna 800018</div>
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
                    <iframe  title="map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3052.077688412246!2d85.0757442475805!3d25.638545736170304!3m2!1i10
                    24!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1686115711709!5m2!1sen!2sin" width="600" height="350" style={{border:"2px solid lightgrey"}} 
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="rightportion" >
                    <Iframe className='my-1'title="form" src="https://docs.google.com/forms/d/e/1FAIpQLSfaobLJhnPtuKpJU3eb2yYFTSWLS8t-4i97VVOvjvx1tff9sg/viewform?embedded=true"
                        width="640" height="809" frameborder="0" marginheight="0" marginwidth="0">Loading…</Iframe>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}