import React from 'react'
import BikeParts from '../../components/bike_part/BikeParts' 
import Header from '../../components/header/Header' 
import Footer from '../../components/footer/Footer'
import "./ComponentCatalog.css"

export default function ComponentCatalog()
{
    return(
        <div className="container_fluid">
            <Header></Header>
            <BikeParts></BikeParts>
            <Footer></Footer>
        </div>
    )

}