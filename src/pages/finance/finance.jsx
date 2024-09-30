import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { useState } from "react"
import './finance.css'

// const ImageGallery = () => {
export default function ImageGallery()
{
   const [result, updateResult] = useState('')
    function calculate() {
        let amount = document.getElementById('amount').value;
        let rate = document.getElementById('rate').value;
        let time = document.getElementById('time').value;
        let monthlyRate = rate / 12 / 100;
        let emi = (amount * monthlyRate * 
                   Math.pow(1 + monthlyRate, time)) /
                  (Math.pow(1 + monthlyRate, time) - 1);
        updateResult(emi.toFixed(2));
        
    }
    return (  
        <div>
            <Header></Header>
         <div className="finance_options">
            <div className="card my-2 gallery-image">
                    <img src="https://rango-ecycle.netlify.app/Bajaj.png" className="card-img-top" alt="..." />
                    {/* <img src={`https://rango-ecycle.netlify.app/${element.image}`} className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                        <p>
                        Bajaj Finance for eligible customers who are already having active Bajaj EMI card.
                        </p>
                    </div>
               </div>
               <div className="card my-2 gallery-image">
                   <img src="https://rango-ecycle.netlify.app/shopse.png" className="card-img-top" alt="..." />
                   {/* <img src={`https://rango-ecycle.netlify.app/${element.image}`} className="card-img-top" alt="..." /> */}
                   <div className="card-body">
                       <p>
                       Credit card payment through shopse web link. Customer can get 3 & 6 month NO COST EMI option.
                       </p>
                   </div>
               </div>
               <div className="card my-2 gallery-image"> 
                    <img src="https://rango-ecycle.netlify.app/hdfc.png" className="card-img-top" alt="..." />
                    {/* <img src={`https://rango-ecycle.netlify.app/${element.image}`} className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                        <p>
                        Paper finance from HDFC Finance. Offline process for finance and first time customers who are looking for bank finance.
                        </p>
                    </div>
               </div>
              
         </div>
        <div className="finance_calculator container py-2">
                 <h3 className='my-1'>EMI Calculator </h3>
                 <form className="row g-3 my-2">
                 <div className="col-md-6 my-1 field"> 
                     <label className = 'form-label'>Loan amount: &#8377;</label>
                     <input type="number" id="amount" classname= 'form-control px-2'  placeholder="Enter amount"/> 
                 </div>
                <div className="col-md-6 my-1 field">
                <label className = 'form-label'>Rate (Interest): %</label>
                <input step=".1" id="rate" classname= 'form-control px-2' placeholder="Enter rate"/>
                </div>
                <div className="col-md-6 my-1 field">
                 <label className = 'form-label'>Months (Time):</label>
                     <input type="number" id="time" classname= 'form-control px-2' placeholder="Enter time"/>
                </div>
                <div>
                <input type="button" value="Calculate" id="btn"className='btn btn-primary emi-btn' onClick={calculate}/>
                </div>
                 <p>Total EMI: &#8377;
                     <span id="output">{result}</span>
                 </p>
                 </form>
         </div>
        <Footer></Footer>
        </div>     
        
   
    )
}

// export default ImageGallery;

