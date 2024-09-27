import React from "react"
import "./catalogmid.css"
import {Bikes} from "../.././Bikes"
import { useState } from "react"
import {   Link } from "react-router-dom"

export default function Catalogmid() {
    var bikes = Bikes
    const[isFiltered, filterIt] = useState({Motovolt:0,EMotorad:0,Rango:0,Gosporty:0,All:1});
    if(isFiltered.Motovolt===1)
    {
        bikes = Bikes.filter(
            (bike) => {
                return bike.Brand.split(" ")[0] === "Motovolt"
            }
        )
    }
    else if(isFiltered.EMotorad===1)
    {
        bikes = Bikes.filter(
            (bike) => {
                return bike.Brand.split(" ")[0] === "EMotorad"
            }
        )
    }
    else if(isFiltered.Rango===1)
    {
        bikes = Bikes.filter(
            (bike) => {
                return bike.Brand.split(" ")[0] === "Rango"
            }
        )
    }
    else if(isFiltered.Gosporty===1)
    {
        bikes = Bikes.filter(
            (bike) => {
                return bike.Brand.split(" ")[0] === "Gosporty"
            }
        )
    }
    else {
        bikes = Bikes
    }
    return (
        <div className='container-fluid d-flex justify-content-center py-3' id="cycles">
            <div className="bikes_list p-3">
                <h3>Best electric cycle in patna</h3>
                <div className="filtering list-group list-group-horizontal">
                    <span>Filter</span>
                    <button type="button" className="btn btn-light border mx-2" onClick={()=>filterIt({Motovolt:1,EMotorad:0,Rango:0,Gosporty:0,All:0})} style={{backgroundColor: isFiltered.Motovolt ? 'green': "white"}}>Motovolt</button>
                    <button type="button" className="btn btn-light border mx-2" onClick={()=>filterIt({Motovolt:0,EMotorad:1,Rango:0,Gosporty:0,All:0})} style={{backgroundColor: isFiltered.EMotorad ? 'green': "white"}}>EMotorad</button>
                    <button type="button" className="btn btn-light border mx-2" onClick={()=>filterIt({Motovolt:0,EMotorad:0,Rango:1,Gosporty:0,All:0})} style={{backgroundColor: isFiltered.Rango ? 'green': "white"}}>Rango</button>
                    <button type="button" className="btn btn-light border mx-2" onClick={()=>filterIt({Motovolt:0,EMotorad:0,Rango:0,Gosporty:1,All:0})} style={{backgroundColor: isFiltered.Gosporty ? 'green': "white"}}>Gosporty</button>
                    <button type="button" className="btn btn-light border mx-2" onClick={()=>filterIt({Motovolt:0,EMotorad:0,Rango:0,Gosporty:0,All:1})} style={{backgroundColor: isFiltered.All ? 'green': "white"}}>All</button>
                </div>
                <div className="cycle-row d-flex flex-row flex-wrap align-items-center justify-content-start">
                    {bikes.map((element) => {
                        return (<div className="card my-2">
                        {/* <img src={`http://localhost:3000/${element.image}`} className="card-img-top" alt="..." /> */}
                        <img src={`https://rango-ecycle.netlify.app/${element.image}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <span className="card-title">{element.Brand}</span>
                            <p className="my-0 fw-bold">Rs. {element.Price}</p>
                            <p className="my-0 text-secondary fs-6">{element.Features.substr(0,30)}...</p>
                            <p className="my=0">{element.Suitablility.substr(0,30)}...</p>
                            <Link type="button" className="btn btn-light border mx-2" to={`/bike_catalog/${element.id}`}>view</Link>
                        </div>
                    </div>)
                    })}
                </div>
                
            </div>
        </div>
    )

}

 