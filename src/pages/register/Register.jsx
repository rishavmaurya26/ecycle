import React from 'react';
import "./register.css";
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header';
export default function Register()
{
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
      <div className='formpage-container'>
      <Header></Header>
        <div className="container-fluid register-form row justify-content-center p-5">
            <div className="company col-4 d-flex justify-content-center align-items-center">
                <img src={PF+"./logo.png"} className='icon mx-4' alt="icon" />
                <h2>Rango E-cycle</h2>
            </div>
            <div className="form-container p-4 col-4">
            <form className="row g-3">
            <div className="col-md-6">
              <label for="First Name" className="form-label">First Name</label>
              <input type="text" className="form-control" id="First Name"/>
            </div>
            <div className="col-md-6">
                <label for="Last Name" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="Last Name"/>
              </div>
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4"/>
              </div>
              <div className="col-md-6">
                <label for="contactnumber" className="form-label">Contact Number</label>
                <input type="number" className="form-control" id="contactnumber"/>
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4"/>
              </div>
              <div className="col-md-6">
                <label for="inputPasswordConfirm4" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="inputPasswordConfirm4"/>
              </div>
            <div className="col-6">
              <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
            <div className="col-6">
              <Link to="/signin" style={{color:"black"}}>Already have an account sign-in</Link>
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

