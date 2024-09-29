import React from 'react'
import { useParams } from 'react-router-dom'
import {Parts} from "../../Parts"
import Header from '../header/Header'
import Footer from '../footer/Footer'
import "./Part.css"

export default function Part(){
    let {id} = useParams()
    id = parseInt(id)
    var selected_Part =  Parts.filter(
        (Part) => {
            return Part.id === id;
        }
    )[0]
    return(
        <div className='conatiner-fluid'>
        <Header></Header>
        <div className="zoom-view">
                        <img src={`http://localhost:3000/${selected_Part.image}`}  alt="..." />
                           <div className="card-body">
                           <span className="card-title">{selected_Part.Brand}</span>
                            <p className="my-0 fw-bold">Rs. {selected_Part.Price}</p>
                            <p className="my-0 text-secondary fs-6">{selected_Part.Features}</p>
                            <p className="my=0">{selected_Part.Suitablility}</p>
                           </div>
                </div>
        <Footer></Footer>
        </div>
    )
}