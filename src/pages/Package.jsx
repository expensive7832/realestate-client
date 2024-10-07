import React, { useEffect } from "react";
import "./package.css";
import { FaBroom, FaCheck, FaInfinity, FaShower, FaSprayCan } from "react-icons/fa6";

function Package() {

  useEffect(() =>{

    

  }, [])

  return (
    <div className="package">
      <div class="container">
        <div>
          <p class="h2 text-center mb-5 heading">Choose Your Perfect Plans</p>
        </div>
        <div class="row mt-3 my-5">
          <div class="col-md-4 ">
            <div class="card d-flex align-items-center justify-content-center">
              <div class="ribon">
                <FaSprayCan/>
              </div>
              <p class="h-1 pt-5">FREE</p>
              <span class="price">
                <sup class="sup">$</sup>
                <span class="number">49</span>
              </span>
              <ul class="mb-5 list-unstyled text-muted">
                <li>
                  <span class="me-2"> <FaCheck/> </span>Bedrooms cleaning
                </li>
                <li>
                  <span class=" me-2"> <FaCheck/> </span>Vacuuming
                </li>
                <li>
                  <span class="me-2"> <FaCheck/> </span>Bathroom cleaning
                </li>
                <li>
                  <span class="me-2"> <FaCheck/> </span>Mirrow cleaning
                </li>
                <li>
                  <span class="me-2"> <FaCheck/> </span>Livingroom cleaning
                </li>
              </ul>
              <div class="btn btn-primary"> BASIC </div>
            </div>
          </div>
          <div class="col-md-4 mt-md-0 mt-5">
            
            <div class="card d-flex align-items-center justify-content-center">
              
              <div class="ribon">
                
                <FaBroom/>
              </div>
              <p class="h-1 pt-5">standard</p>
              <span class="price">
                
                <sup class="sup">$</sup> <span class="number">79</span>
              </span>
              <ul class="mb-5 list-unstyled text-muted">
                
                <li>
                  <span class="me-2"><FaCheck/></span>Bedrooms cleaning
                </li>
                <li>
                  <span class="me-2"><FaCheck/></span>Vacuuming
                </li>
                <li>
                  <span class="me-2"><FaCheck/></span>Bathroom cleaning
                </li>
                <li>
                  <span class="me-2"><FaCheck/></span>Mirrow cleaning
                </li>
                <li>
                  <span class="me-2"><FaCheck/></span>Livingroom cleaning
                </li>
              </ul>
              <div class="btn btn-primary mb-1"> get started </div>
            </div>
          </div>
          <div class="col-md-4 mt-lg-0 mt-5">
            
            <div class="card d-flex align-items-center justify-content-center">
              
              <div class="ribon">
                
                <span class=""> <FaShower/> </span>
              </div>
              <p class="h-1 pt-5">premium</p>
              <span class="price">
                
                <sup class="sup">$</sup> <span class="number">100</span>
              </span>
              <ul class="mb-5 list-unstyled text-muted">
                
                <li>
                  <span class="me-2"><FaCheck/></span>Bedrooms cleaning
                </li>
                <li>
                  <span class="me-2"><FaCheck/></span>Vacuuming
                </li>
                <li>
                  <span class="me-2"><FaCheck/></span>Bathroom cleaning
                </li>
                <li>
                  <span class="me-2"><FaCheck/></span>Mirrow cleaning
                </li>
                <li>
                  <span class="me-2"><FaCheck/></span>Livingroom cleaning
                </li>
              </ul>
              <div class="btn btn-primary"> get started </div>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default Package;
