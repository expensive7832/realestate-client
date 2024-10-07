import React from "react";
import "./crm.css";

const Crm = () => {
  return (
    <div id="crm">
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-md-6 align-self-center">
            <div className="container">
              <div className="row text-white justify-content-center align-items-center">
                <div className="col-md-6">
                  <h3>Why Houzez Is The Perfect Choice?</h3>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-column">
                    <h3 className="py-2 fw-bold">01</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-column">
                    <h3 className="py-2 fw-bold">02</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-column">
                    <h3 className="py-2 fw-bold">03</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-5 bg-white">
              <h3 className="pb-2">Real Estate Inquiry Form</h3>
              <p className="lead">
                Design custom lead capture forms that integrate with the Houzez
                CRM
              </p>

              <form>
  
                <div className="mb-3">
                <label htmlFor="inquiry" className="fw-bold form-label">
                  Inquiry
                </label>
                  <select
                    class="form-select"
                    id="inquiry"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  
                </div>
                <div className="mb-3">
                <label htmlFor="info" className="fw-bold form-label">
                Information
                </label>
                  <select
                    class="form-select"
                    id="info"
                    aria-label="Default select example"
                  >
                    <option selected>My Information</option>
                    <option value="1">A student</option>
                    <option value="2">goverment Worker</option>
                    <option value="3">Health Sector</option>
                  </select>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                  <label htmlFor="fname" className="form-label">
                    FirstName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    aria-describedby="emailHelp"
                  />
                </div>
                  <div className="col-12 col-md-6">
                  <label htmlFor="lname" className="form-label">
                   LastName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    
                  />
              
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="email"
                  />
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                  <label htmlFor="location" className="fw-bold form-label">
                    Location
                  </label>
                  <select
                    class="form-select"
                    id="location"
                    aria-label="Default select example"
                  >
                    <option selected>location</option>
                    <option value="1">kwara</option>
                    <option value="2">Lagos</option>
                    <option value="3">Abuja</option>
                  </select>
                </div>
                  <div className="col-12 col-md-6">
                  <label htmlFor="property" className="fw-bold form-label">
                   Property
                  </label>
                  <select
                    class="form-select"
                    id="property"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
              
                  </div>
                </div>

                <div className="row my-2">
                  <div className="col-12 col-md-6">
                  <label htmlFor="max" className="form-label">
                    Max Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="max"
                    aria-describedby="emailHelp"
                  />
                </div>
                  <div className="col-12 col-md-6">
                  <label htmlFor="min" className="form-label">
                   Min
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="min"
                    
                  />
              
                  </div>
                  <div className="col-12 col-md-6">
                  <label htmlFor="nob" className="form-label">
                  Number Of Bed
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="nob"
                    aria-describedby="emailHelp"
                  />
                </div>
                  <div className="col-12 col-md-6">
                  <label htmlFor="min" className="form-label">
                   Number Of Bath
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="min"
                    
                  />
              
                  </div>
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                  I consent to having this website store my submitted information
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crm;
