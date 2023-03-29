import React from 'react';
import './aboutmid.css'
export default function AboutMid()
{
    return(
        <div className="container-fluid p-5" id="aboutmid">
            <h1 className='text-center'>Rango e-cycles</h1>
            <p className='text-center'>We are patna based electric bicycle retails brand that sells high-performance bicycles.</p>
            <div className="d-flex align-items-center justify-content-evenly ownerinfo-container">
            <div className='d-flex flex-column justify-content-center align-item-center owner-info'>
                <img src="owner.jpeg" alt="owner-img" className='owner-img'/>
                <p className='text-center m-0'>kumar kumar</p>
                <p className='text-center'>Manager</p>
            </div>
            <div className='d-flex flex-column justify-content-center align-item-center owner-info'>
                <img src="owner.jpeg" alt="owner-img" className='owner-img'/>
                <p className='text-center m-0'>kumar kumar</p>
                <p className='text-center'>Manager</p>
            </div>
            </div>
        </div>
    )
}