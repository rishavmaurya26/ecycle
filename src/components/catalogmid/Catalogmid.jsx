import React from "react"
import "./catalogmid.css"
import {Bikes} from "../.././Bikes"
import { useState } from "react"

export default function Catalogmid() {
    var bikes = Bikes
    const[isSorted, sortIt] = useState({price:0,range:0,charging:0});
    if(isSorted.price===1)
    {
        Bikes.sort((a,b)=>{return (a.Price-b.Price)})
    }
    if(isSorted.range===1)
    {
        Bikes.sort((a,b)=>{return (b.Range-a.Range)})
    }
    if(isSorted.charging===1)
    {
        Bikes.sort((a,b)=>{return (a.Charging-b.Charging)})
    }
    // console.log(bikes)
    return (
        <div className='container-fluid d-flex justify-content-between py-3' id="cycles">
            <div className="leftportion p-3">
                <h5>Filter By</h5>
                <div>
                    <span className="fw-bold">Price</span>
                    <ul class="list-group">
                        <li class="list-group-item border-0">
                            <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                            <label class="form-check-label" for="firstCheckbox">First checkbox</label>
                        </li>
                        <li class="list-group-item border-0">
                            <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
                            <label class="form-check-label" for="secondCheckbox">Second checkbox</label>
                        </li>
                        <li class="list-group-item border-0">
                            <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                            <label class="form-check-label" for="thirdCheckbox">Third checkbox</label>
                        </li>
                    </ul>
                </div>
                <div>
                    <span className="fw-bold"> Brand</span>
                    <ul class="list-group">
                        <li class="list-group-item border-0">An item</li>
                        <li class="list-group-item border-0">A second item</li>
                        <li class="list-group-item border-0">A third item</li>
                        <li class="list-group-item border-0">A fourth item</li>
                        <li class="list-group-item border-0">And a fifth one</li>
                    </ul>
                </div>
            </div>
            <div className="rightportion p-3">
                <h3>Best electric cycle in patna</h3>
                <div className="sorting list-group list-group-horizontal">
                    <span>Sort By</span>
                    <button type="button" className="price btn btn-outline border border-0  " onClick={()=>sortIt({price:1,range:0,charging:0})} style={{color: isSorted.price ? 'blue': "black"}}>Price: low-high</button>
                    <button type="button" className="range btn btn-outline border border-0  " onClick={()=>sortIt({price:0,range:1,charging:0})} style={{color: isSorted.range ? 'blue': "black"}}>Range: high-low</button>
                    <button type="button" className="charging btn btn-outline border border-0 " onClick={()=>sortIt({price:0,range:0,charging:1})} style={{color: isSorted.charging ? 'blue': "black"}}>Charging: Time low-high</button>
                </div>
                <div className="cycle-row d-flex flex-row flex-wrap align-items-center justify-content-between">
                    {bikes.map((element) => {
                        return (<div className="card my-2">
                        <img src="cycle.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <span className="card-title">{element.Brand} bike</span>
                            <h5 className="text-dark-emphasis my-0">Rs. {element.Price}</h5>
                            <p className="my-0">{element.Range} km</p>
                            <p className="my-0">charging time - {element.Charging} hr</p>
                        </div>
                    </div>)
                    })}
                </div>
            </div>
        </div>
    )

}

 