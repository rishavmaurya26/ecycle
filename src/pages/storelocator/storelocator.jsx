import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Iframe from 'react-iframe'

import './storelocator.css'

export default function Storelocator()
{
    return(
        <div className="container_fluid storelocator_container"> 
            <Header></Header>
            
            <div className="midbody d-flex flex-column align-items-center py-5 store_list">
            <h2 className="my-2 text-decoration-underline">Our stores location</h2>
                    <div className="d-flex  nav col-md-3 justify-content-between align-items-center py-1 shadow-lg my-3 store">
                    <div className='px-3 address'> 
                        <h4>Rupaspur Digha Nahar Road, Digha, Patna</h4>
                        <div > Rango E-Cycles | Powered by MOTOVOLT | All Types of Electric Bicycles, Opposite Pillar No 300, Digha Sonepur Bridge Link (Nahar) Road, Digha, Patna, Bihar 800018</div>
                    </div>
                    <iframe  title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1798.483926236672!2d85.07566716122322!3d25.63919244372457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57ea3b891a99%3A0xefb3da9f00a76262!2sRango%20E-Cycles%20%7C%20Powered%20by%20MOTOVOLT%20%7C%20All%20Types%20of%20Electric%20Bicycles!5e0!3m2!1sen!2sin!4v1727325539636!5m2!1sen!2sin" width="600" height="350" style={{border:"2px solid lightgrey"}} 
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div >
                <div className="d-flex  nav col-md-3 justify-content-between align-items-center py-1 shadow-lg my-3 store">
                    <div className="px-3 address">
                        <h4>Khagaul Saguna Road, Danapur, Patna</h4>
                        <div > Rango E-Cycles | Powered by EM | Bihar's First | EMotorad Exclusive Showroom, Ram Krishna Nagar, Saguna Khagaul Rd, near Imperial Hyundai, Saguna More, Balaji Nagar, Patna, Bihar 801503</div>
                      </div>
                    <iframe  title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7154305383747!2d85.03930817529535!3d25.614370677444803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57371edceb4d%3A0xb992254722adcdab!2sRango%20E-Cycles%20%7C%20Powered%20by%20EM%20%7C%20Bihar&#39;s%20First%20%7C%20EMotorad%20Exclusive%20Showroom!5e0!3m2!1sen!2sin!4v1727325905303!5m2!1sen!2sin" width="600" height="350" style={{border:"2px solid lightgrey"}} 
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="d-flex  nav col-md-3 justify-content-between align-items-center py-1 shadow-lg my-3 store">
                    <div className="px-3 address">
                        <h4>Club Road, Arrah, Bhojpur</h4>
                        <div >Opposite BDO Block, Club Road, Landmark: Sri Durga Press, Arrah, Bhojpur, Bihar 802301</div>
                      </div>
                    <iframe  title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.502553949777!2d84.65537247529339!3d25.55494187748242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5f5541bf3e13%3A0xd0417e7bb171cf82!2sRango%20E-Cycles!5e0!3m2!1sen!2sin!4v1727326151446!5m2!1sen!2sin" width="600" height="350" style={{border:"2px solid lightgrey"}} 
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )

}