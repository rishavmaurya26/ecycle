import React,{useState} from 'react'
// import Header from '../header/Header' 
// import Footer from '../footer/Footer'
import "./Blogs.css"

export default function Blogs(element) {

    const more = "view more"
    const less = "view less"
    const [extended, setextended] = useState(0);
    
    return (
        <div className="container_fluid blog_container">  
            <h3>{element.props.title}</h3>
            <div className='blog_image'>
                <img src={element.props.image} alt="" />
                <a href={element.props.link} style={{color:"black"}}>link to post</a> 
            </div>
            <div>
            <p style={{fontWeight:"bold"}}>{element.props.date}</p>
            {extended ===0 ?<><p>{element.props.description.substring(0,500)}.....</p><button onClick={() => {setextended(1)}}>{more}</button></>:
            <><p>{element.props.description}</p><button onClick={() => {setextended(0)}}>{less}</button></>}
            </div>
        </div>
    )

}