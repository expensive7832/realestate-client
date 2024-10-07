import React from 'react'
import Header from "../components/Header";
import "./forrent.css";
import FlatItem from "../components/FlatItem";
import "./../components/propertyitem.css";
import Footer from "../components/Footer";
const ForSale = () => {
  return (
    <div id="sale">
         <Header />
      <div
        className="page-top text-center fw-bold"
        style={{ fontSize: "2rem" }}
      >
        Available Properties For Sale
      </div>
      <div className="d-none d-md-block searchProper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <i className="fa-solid fa-search"></i>
              <input
                className="searchBox"
                placeholder="Enter Your search"
                type="text"
              />
            </div>
            <div className="col-md-1">
              <select
                class="form-select"
                id="property"
                aria-label="Default select example"
              >
                <option selected>Status</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-md-1">
              <select
                class="form-select"
                id="property"
                aria-label="Default select example"
              >
                <option selected>Type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-md-1 text-light align-self-center fw-bold">
              <i class="fa-solid fa-gear"></i>Advance
            </div>
            <div className="col-md-1 text-light align-self-center">
              <button className="btn btn-lg btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Library</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Data
            </li>
          </ol>
        </nav>
      </div>

      <div className="container">
        <div className="d-flex mx-3 justify-content-between align-items-center">
          <p className="text-center">57 properties</p>
          <div className="mb-2 d-flex justify-content-around align-items-center">
            <strong>Sort:</strong>
            <select className="orderBy">
              <option selected>asc</option>
              <option selected>price</option>
              <option selected>location</option>
              <option selected>des</option>
            </select>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <FlatItem className="item" id="2" image="/img/2.jpg" />
            </div>
            <div className="col-md-4">
              <FlatItem className="item" id="3" image="/img/3.jpg" />
            </div>
            <div className="col-md-4">
              <FlatItem
                className="item"
                id="4"
                image="/img/product1.jpeg"
              />
            </div>
            <div className="col-md-4">
              <FlatItem className="item" id="5" image="/img/4.jpg" />
            </div>
            <div className="col-md-4">
              <FlatItem className="item" id="6" image="/img/team.jpg" />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5 container">
          <nav aria-label="...">
            <ul className="pagination">
              <li className="page-item disabled">
                <span className="page-link">Previous</span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active" aria-current="page">
                <span className="page-link">2</span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>

      
      </div>

      <Footer/>
    </div>
  )
}

export default ForSale