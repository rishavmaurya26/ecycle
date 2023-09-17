import React from 'react'
import { useParams } from 'react-router-dom'
import {Bikes} from "../.././Bikes"
import Header from '../header/Header'
import Footer from '../footer/Footer'
import "./Bike.css"

export default function Bike(){
    let {id} = useParams()
    var selected_bike =  Bikes.filter(
        (bike) => {
            console.log(bike.id)
            return bike.id == id;
        }
    )[0]
    console.log(selected_bike)
    return(
        <div className='conatiner-fluid'>
        <Header></Header>
        <div className="zoom-view">
                        <img src={`https://rango-ecycle.netlify.app/${selected_bike.image}`}  alt="..." />
                           <div className="card-body">
                           <span className="card-title">{selected_bike.Brand}</span>
                            <p className="my-0 fw-bold">Rs. {selected_bike.Price}</p>
                            <p className="my-0 text-secondary fs-6">{selected_bike.Features}</p>
                            <p className="my=0">{selected_bike.Suitablility}</p>
                           </div>
                </div>
        <Footer></Footer>
        </div>
    )
}