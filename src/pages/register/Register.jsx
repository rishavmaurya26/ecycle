import React from 'react';
import "./register.css";
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
export default function Register() {
  
  return (
    <div className='formpage-container' id="register">
      <Header></Header>
      <div className="container-fluid register-form px-2 py-5">
        <div className="company col-4 d-flex justify-content-center align-items-center">
          <img src="./logo.png" className='icon mx-4' alt="icon" />
          <h2>RANGO E-CYCLES</h2>
        </div>
        <div className="form-container  col-4">
          <form className="row g-3">
            <div className="col-md-6 my-1">
              <label for="First Name" className="form-label">First Name</label>
              <input type="text" className="form-control" id="First Name" />
            </div>
            <div className="col-md-6 my-1">
              <label for="Last Name" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="Last Name" />
            </div>
            <div className="col-md-6 my-1">
              <label for="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6 my-1">
              <label for="contactnumber" className="form-label">Contact Number</label>
              <input type="number" className="form-control" id="contactnumber" />
            </div>
            <div className="col-md-6 my-1">
              <label for="inputPassword4" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-md-6 my-1">
              <label for="inputPasswordConfirm4" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="inputPasswordConfirm4" />
            </div>
            <div className="col-5 my-2">
              <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
            <div className="col-7 d-flex align-items-end justify-content-end my-2">
              <Link to="/signin" className='' style={{ color: "black" }}>Already have an account sign-in</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

