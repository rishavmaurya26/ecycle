import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Blogs from '../../components/Blogs/Blogs'
import {Blogslist} from '../.././Blogs'

import './BlogsList.css'

export default function BlogsList()
{
    return(
        <div className="container_fluid Blogslist_container"> 
            <Header></Header>
            {Blogslist.map((element)=>{
                    return(
                        <Blogs key={element.id} props={element}></Blogs>
                    )
            })}
            <Footer></Footer>
        </div>
    )

}