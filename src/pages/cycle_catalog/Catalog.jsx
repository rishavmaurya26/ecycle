import React from 'react'
import Header from  "../../components/header/Header"
import Footer from  "../../components/footer/Footer"
import Catalogmid from "../../components/catalogmid/Catalogmid"

export default function Catalog()
{
    return(
        <div>
        <Header></Header>
        <Catalogmid></Catalogmid>
        <Footer></Footer>
        </div>
    )
}