import React, { useState } from "react";

const PropertyListing = () => {

const [checkFeatures, setCheckFeatures] = useState(false)

  return (
    <div id="signup">
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                  
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample photo"
                      className="img-fluid"
                      style={{
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover" ,
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem",
                      }}
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Post Property</h3>
                      <div className="row">
                        <div className="col-12 my-1">
                          <div className="form-outline">
                            <label
                              className="form-label fw-bold"
                              htmlFor="form3Example1m"
                            >
                              Title
                            </label>
                            <input
                              type="text"
                              id="form3Example1m"
                              className="form-control form-control-lg"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 my-1 mb-4">
                          <div className="form-outline">
                            <label
                              className="form-label fw-bold"
                              htmlFor="form3Example1n"
                            >
                              Purpose
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
                        <div className="col-12 col-md-6 mb-4 my-1">
                          <div className="form-outline">
                            <label
                              className="form-label fw-bold"
                              htmlFor="form3Example1n"
                            >
                              Type Of Property
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
                      </div>
                      <div className="row my-1">
                        <div className="col-md-3 col-12 mb-4 my-1">
                          <div className="form-outline">
                            <label
                              className="form-label fw-bold"
                              htmlFor="form3Example1m1"
                            >
                              Bedroom
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
                        <div className="col-md-3 col-12 mb-4 my-1">
                          <div className="form-outline">
                            <label
                              className="form-label fw-bold"
                              htmlFor="form3Example1m1"
                            >
                              Bathroom
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
                        <div className="col-md-3 col-12 mb-4 my-1">
                          <div className="form-outline">
                            <label
                              className="form-label fw-bold"
                              htmlFor="form3Example1m1"
                            >
                              Toilet
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
                        <div className="col-md-3 col-12 mb-4 my-1">
                          <div className="form-outline">
                            <label
                              className="form-label fw-bold"
                              htmlFor="form3Example1m1"
                            >
                              Size
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
                      </div>
                      <div className="col-12 my-1">
                      <div className="d-flex aling-items-center justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                        <input
                            type="checkbox"
                            className="form-check"
                            id="btncheck1"
                            autoComplete="off"
                          />
                          <label
                            className="fw-bold"
                            htmlFor="btncheck1"
                          >
                            Furnished
                          </label>
                        </div>
                        <div className="d-flex align-items-center">
                        <input
                            type="checkbox"
                            className="form-check"
                            id="btncheck1"
                            autoComplete="off"
                          />
                          <label
                            className="fw-bold"
                            htmlFor="btncheck1"
                          >
                            Service
                          </label>
                        </div>
                        <div className="d-flex align-items-center"> 
                        <input
                            type="checkbox"
                            className="form-check"
                            id="btncheck1"
                            autoComplete="off"
                          />
                          <label
                            className="fw-bold"
                            htmlFor="btncheck1"
                          >
                            Newly Built
                          </label>
                        </div>
                      </div>
                      </div>

                      <div className="row">
                        
                        <div className="col-md-4 col-12 mb-4 my-1">
                          <div className="form-outline">
                            <label
                              className="form-label fw-bold"
                              htmlFor="form3Example1m1"
                            >
                              State
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
                        <div className="col-md-4 col-12 mb-4 my-1">
                          <div className="form-outline">
                            <label
                              className="form-label fw-bold"
                              htmlFor="form3Example1m1"
                            >
                              Locality
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
                        <div className="col-md-4 col-12 mb-4 my-1">
                          <div className="form-outline">
                            <label
                              className="form-label fw-bold"
                              htmlFor="form3Example1m1"
                            >
                              Area
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
                      </div>
                      
                      <div className="form-outline mb-4">
                      <label className="form-label fw-bold" htmlFor="form3Example8">
                          Street/Address
                        </label>
                        <input
                          type="text"
                          id="form3Example8"
                          className="form-control form-control-lg"
                        />
                        
                      </div>
                     
                      <div className="row">
                        <div className="col-md-6 mb-4">
                        <div className="form-outline mb-4">
                        <label className="form-label fw-bold" htmlFor="form3Example8">
                          Price
                        </label>
                        <input
                          type="number"
                          id="form3Example8"
                          className="form-control form-control-lg"
                        />
                        
                      </div>
                        </div>
                        <div className="col-md-6 mb-4">
                        <label
                              className="form-label fw-bold"
                              htmlFor="form3Example1m1"
                            >Append To</label>
                          <select className="select form-control">
                            <option value={1}>State</option>
                            <option value={2}>Option 1</option>
                            <option value={3}>Option 2</option>
                            <option value={4}>Option 3</option>
                          </select>
                        </div>
                        
                      </div>

                      <div className="form-outline mb-4">
                      <label className="form-label fw-bold" htmlFor="form3Example8">
                         Description
                        </label>
                        <textarea
                          col="10"
                          id="form3Example8"
                          className="form-control form-control-lg"
                        />

                        <button className="btn btn-lg btn-success my-2" onClick={() => setCheckFeatures(!checkFeatures)}>{checkFeatures ? "Close Features" : "Check Features"}</button>
                      
                      <div className="features my-2" style={{display: `${checkFeatures ? "block" : "none"}`}}>
                      <div className="d-flex aling-items-center flex-wrap justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                        <input
                            type="checkbox"
                            className="form-check"
                            id="btncheck1"
                            autoComplete="off"
                          />
                          <label
                            className="fw-bold"
                            htmlFor="btncheck1"
                          >
                            Swimming pool
                          </label>
                        </div>
                        <div className="d-flex align-items-center">
                        <input
                            type="checkbox"
                            className="form-check"
                            id="btncheck1"
                            autoComplete="off"
                          />
                          <label
                            className="fw-bold"
                            htmlFor="btncheck1"
                          >
                            Security
                          </label>
                        </div>
                        <div className="d-flex align-items-center">
                        <input
                            type="checkbox"
                            className="form-check"
                            id="btncheck1"
                            autoComplete="off"
                          />
                          <label
                            className="fw-bold"
                            htmlFor="btncheck1"
                          >
                            Garden
                          </label>
                        </div>
                        <div className="d-flex align-items-center">
                        <input
                            type="checkbox"
                            className="form-check"
                            id="btncheck1"
                            autoComplete="off"
                          />
                          <label
                            className="fw-bold"
                            htmlFor="btncheck1"
                          >
                            Pop ceiling
                          </label>
                        </div>
                        <div className="d-flex align-items-center"> 
                        <input
                            type="checkbox"
                            className="form-check"
                            id="btncheck1"
                            autoComplete="off"
                          />
                          <label
                            className="fw-bold"
                            htmlFor="btncheck1"
                          >
                            Jacuzzi
                          </label>
                        </div>
                        <div className="d-flex align-items-center"> 
                        <input
                            type="checkbox"
                            className="form-check"
                            id="btncheck1"
                            autoComplete="off"
                          />
                          <label
                            className="fw-bold"
                            htmlFor="btncheck1"
                          >
                            cctv camera
                          </label>
                        </div>
                        <div className="d-flex align-items-center"> 
                        <input
                            type="checkbox"
                            className="form-check"
                            id="btncheck1"
                            autoComplete="off"
                          />
                          <label
                            className="fw-bold"
                            htmlFor="btncheck1"
                          >
                            Gym
                          </label>
                        </div>
                      </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example9"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label fw-bold" htmlFor="form3Example9">
                          Youtube Video Link
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example90"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example90">
                          Instagram Video Link
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="file"
                          id="form3Example90"
                          className="form-control form-control-lg"
                        />

                      </div>
                      
                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light btn-lg">
                          Reset all
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-lg ms-2"
                        >
                          Submit form
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyListing;
