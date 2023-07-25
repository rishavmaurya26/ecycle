import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './signin.css'
export default function Signin()
{
    return(
        <div className='formpage-container' id="signin">
        <Header></Header>
        <div className="container-fluid register-form d-flex flex-column align-items-center justify-content-center p-5">
            <div className="company col-4 d-flex justify-content-center align-items-center">
                <img src="./logo.png" className='icon mx-4' alt="icon" />
                <h2>RANGO E-CYCLES</h2>
            </div>
            <div className="form-container-sign my-4 col-4 d-flex justify-content-center">
            <form className="row g-3">
            <div className="col-md-12 my-1">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4"/>
              </div>
              <div className="col-md-12 my-1">
                <label for="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4"/>
              </div>
            <div className="col-5 my-2">
              <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
            <div className="col-7 d-flex align-items-end justify-content-end my-2">
              <Link to="/register" style={{color:"black"}}>Don't have an account Register</Link>
            </div>
          </form>
    </div>
        </div>
        <Footer></Footer>
        </div>
        
        
    )
}