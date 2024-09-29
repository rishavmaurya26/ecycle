import React from "react"
import "./BikeParts.css"
import {Parts} from "../.././Parts"
import { useState } from "react"
import {   Link } from "react-router-dom"

export default function BikeParts() {
    var parts = Parts
    const[isFiltered, filterIt] = useState({Battery:0,Pump:0,Sensors:0,Brakes:0,All:1});
    if(isFiltered.Battery===1)
    {
        parts = Parts.filter(
            (bike) => {
                return bike.Brand.split(" ")[0] === "Battery"
            }
        )
    }
    else if(isFiltered.AirPump===1)
    {
        parts = Parts.filter(
            (bike) => {
                return bike.Brand.split(" ")[0] === "Pump"
            }
        )
    }
    else if(isFiltered.Sensors===1)
    {
        parts = Parts.filter(
            (bike) => {
                return bike.Brand.split(" ")[0] === "Sensors"
            }
        )
    }
    else if(isFiltered.Brakes===1)
    {
        parts = Parts.filter(
            (bike) => {
                return bike.Brand.split(" ")[0] === "Brakes"
            }
        )
    }
    else {
        parts = Parts
    }
    return (
        <div className='container-fluid d-flex justify-content-center py-3' id="Parts">
            <div className="Parts_list p-3">
                <h3>Best electric cycle in patna</h3>
                <div className="filtering list-group list-group-horizontal">
                    <span>Filter</span>
                    <button type="button" className="btn btn-light border mx-2" onClick={()=>filterIt({Battery:1,Pump:0,Sensors:0,Brakes:0,All:0})} style={{backgroundColor: isFiltered.Battery ? 'green': "white"}}>Battery</button>
                    <button type="button" className="btn btn-light border mx-2" onClick={()=>filterIt({Battery:0,Pump:1,Sensors:0,Brakes:0,All:0})} style={{backgroundColor: isFiltered.Pump ? 'green': "white"}}>Pump</button>
                    <button type="button" className="btn btn-light border mx-2" onClick={()=>filterIt({Battery:0,Pump:0,Sensors:1,Brakes:0,All:0})} style={{backgroundColor: isFiltered.Sensors ? 'green': "white"}}>Sensors</button>
                    <button type="button" className="btn btn-light border mx-2" onClick={()=>filterIt({Battery:0,Pump:0,Sensors:0,Brakes:1,All:0})} style={{backgroundColor: isFiltered.Brakes ? 'green': "white"}}>Brakes</button>
                    <button type="button" className="btn btn-light border mx-2" onClick={()=>filterIt({Battery:0,Pump:0,Sensors:0,Brakes:0,All:1})} style={{backgroundColor: isFiltered.All ? 'green': "white"}}>All</button>
                </div>
                <div className="cycle-row d-flex flex-row flex-wrap align-items-center justify-content-start">
                    {parts.map((element) => {
                        return (<div className="card my-2">
                        <img src={`http://localhost:3000/${element.image}`} className="card-img-top" alt="..." />
                        {/* <img src={`https://rango-ecycle.netlify.app/${element.image}`} className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <span className="card-title">{element.Brand}</span>
                            <p className="my-0 fw-bold">Rs. {element.Price}</p>
                            <p className="my-0 text-secondary fs-6">{element.Features.substr(0,30)}...</p>
                            <p className="my=0">{element.Suitablility.substr(0,30)}...</p>
                            <Link type="button" className="btn btn-light border mx-2" to={`/Part_catalog/${element.id}`}>view</Link>
                        </div>
                    </div>)
                    })}
                </div>
                
            </div>
        </div>
    )

}

 