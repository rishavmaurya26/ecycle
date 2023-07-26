import React from 'react'
import BikeComponent from '../../components/bike_components/BikeComponents' 
import Header from '../../components/header/Header' 
import Footer from '../../components/footer/Footer'
import "./ComponentCatalog.css"

export default function Component_Catalog()
{
    return(
        <div className="container_fluid">
            <Header></Header>
            <BikeComponent></BikeComponent>
            <Footer></Footer>
        </div>
    )

}