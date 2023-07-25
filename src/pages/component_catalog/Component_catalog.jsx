import React from 'react'
import Bike_Component from '../../components/bike_components/Bike_components' 
import Header from '../../components/header/Header' 
import Footer from '../../components/footer/Footer'
import "./component_catalog.css"

export default function()
{
    return(
        <div className="container_fluid">
            <Header></Header>
            <Bike_Component></Bike_Component>
            <Footer></Footer>
        </div>
    )

}