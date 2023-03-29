import React from 'react'
import Header from  "../../components/header/Header"
import Footer from  "../../components/footer/Footer"
import Testimonial from '../../components/testimonial/Testimonial';
import Catalog from '../../components/catalog/Catalog';
import Illustration from '../../components/illustration/Illustration';
import Formcontainer from '../../components/forms/formcontainer';
export default function Home()
{
    return(
        <div>
        <Header></Header>
      <Illustration></Illustration>
      <Catalog></Catalog>
    <Formcontainer></Formcontainer>
      <Testimonial></Testimonial>
      <Footer></Footer>
        </div>
    )
}