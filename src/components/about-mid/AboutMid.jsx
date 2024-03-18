import React from 'react';
import './aboutmid.css'
export default function AboutMid() {
    return (
        <div className="container-fluid p-5" id="aboutmid">
            <h1 className='text-center'>RANGO E-CYCLES</h1>
            <p className='text-center'>We are patna based electric bicycle retails brand that sells high-performance bicycles.
                Best in class electric cycles to meet your everyday needs, keeps you fit, save your money and helps the environment.</p>
            <div className="d-flex align-items-center justify-content-evenly ownerinfo-container">
                <div className='d-flex flex-column justify-content-center align-items-center owner-info'>
                    <img src="Prasan.png" alt="owner-img" className='owner-img' />
                    <div className='my-2'>
                        <p className='text-center'>Prasan Dutt Raju</p>
                        <p className='text-center'>Founder</p>
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center owner-info'>
                    <img src="Ritika.jpeg" alt="owner-img" className='owner-img' />
                    <div className="my-2">
                        <p className='text-center'>Ritika Dutt</p>
                        <p className='text-center'>Co-Founder</p>
                    </div>
                </div>
            </div>
        </div>
    )
}