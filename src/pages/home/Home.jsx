import React from 'react'
import Header from  "../../components/header/Header"
import Footer from  "../../components/footer/Footer"
import Testimonial from '../../components/testimonial/Testimonial';
import Services from '../../components/services/Services';
import Posterimage from '../../components/posterimage/Posterimage';
import Formcontainer from '../../components/forms/formcontainer';
export default function Home()
{
    return(
        <div>
        <Header></Header>
      <Posterimage></Posterimage>
      <Services></Services>
    <Formcontainer></Formcontainer>
      <Testimonial></Testimonial>
      <Footer></Footer>
        </div>
    )
}