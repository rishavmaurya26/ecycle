import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header';
import './signin.css'
export default function Signin()
{
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <div className='formpage-container'>
        <Header></Header>
        <div className="container-fluid register-form d-flex flex-column align-items-center justify-content-center p-5">
            <div className="company col-4 d-flex justify-content-center align-items-center">
                <img src={PF+"./logo.png"} className='icon mx-4' alt="icon" />
                <h2>Rango E-cycle</h2>
            </div>
            <div className="form-container-sign p-4 my-4 col-4 d-flex justify-content-center">
            <form className="row g-3">
            <div className="col-md-12">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4"/>
              </div>
              <div className="col-md-12">
                <label for="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4"/>
              </div>
            <div className="col-4">
              <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
            <div className="col-8">
              <Link to="/register" style={{color:"black"}}>Don't have an account Register</Link>
            </div>
          </form>
    </div>
    {/* <div className="col-12">
              <label for="inputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="col-md-6">
              <label for="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-2">
              <label for="inputZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip"/>
            </div> */}
        </div>
        </div>
        
        
    )
}