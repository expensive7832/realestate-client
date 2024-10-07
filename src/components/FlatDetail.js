import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom"
import Header from "./Header";
const FlatDetail = () => {
  const images = [
    {
      original: "/img/product1.jpeg",
      thumbnail: "/img/product1.jpeg",
    },
    {
      original: "/img/banner.jpg",
      thumbnail: "/img/banner.jpg",
    },
    {
      original: "/img/product1.jpeg",
      thumbnail: "/img/product1.jpeg",
    },
  ];

  return (
    <>
     <Header />
    <div className="flat-detail">
      <div className="page-top m-auto text-center lead fw-bold">Property Details</div>
      <div className="container my-2">
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
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="fd-top flat-detail-content">
              <div>
                <h3 className="flat-detail-title">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p className="fd-address">
                  {" "}
                  <i className="fas fa-map-marker-alt"></i>
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div>
                <span className="fd-price">$650</span>
              </div>
            </div>
            <ImageGallery
              flickThreshold={0.5}
              slideDuration={0}
              items={images}
              showNav={true}
              showFullscreenButton={true}
              showPlayButton={true}
            />
            <div className="row">
              <div className="col-lg-8">
                <div className="fd-item overview">
                  <div className="py-3 d-flex flex-wrap justify-content-between align-items-center">
                  <p className="lead">Overview</p>
                  <h4><span className="fw-bold">PropertyID:</span><span className="text-capitalize">34YU5</span></h4>
                  </div>
                  <hr/>
                  <div className="container-fluid">
                      <div className="row justify-content-between">
                          <div className="col-6 col-md-2">
                              <h6 className="lead fw-bold">Flat</h6>
                              <small>Apartment Type</small>
                          </div>
                          <div className="col-6 col-md-2">
                              <h6 className="lead"><i className="fa-solid fa-bed px-2"></i><span>4</span></h6>
                              <small>Bedroom</small>
                          </div>
                          <div className="col-6 col-md-2">
                              <h6 className="lead"><i className="fa-solid fa-shower px-2"></i><span>2</span></h6>
                              <small>Bathroom</small>
                          </div>
                          <div className="col-6 col-md-2">
                              <h6 className="lead"><i className="fa-solid fa-car px-2"></i><span>4</span></h6>
                              <small>Parking</small>
                          </div>
                          <div className="col-6 col-md-2">
                              <h6 className="lead"><i class="fa-solid fa-tape"></i><span>2000</span></h6>
                              <small>sqFt</small>
                          </div>
                          <div className="col-6 col-md-2">
                              <h6 className="lead"><i className="fa-solid fa-calendar px-2"></i><span>2016</span></h6>
                              <small>Year Built</small>
                          </div>
                         
                      </div>
                  </div>
                </div>
                <div className="fd-item">
                  <h4>Description</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </div>
                <div className="fd-item fd-property-detail">
                <div className="py-3 d-flex flex-wrap justify-content-between align-items-center">
                  <p className="lead">Property Details</p>
                  <p><span className="fw-bold"><i className="fa-solid fa-calendar"></i></span><span className="text-capitalize">Updated on {new Date().toDateString()}</span></p>
                  </div>
                  <hr/>
                  <div className="row p-4 border border-light text-white bg-secondary img-thumbnail">
                    <div className="col-lg-4">
                      <span>Kitchen: </span>
                      <span>1</span>
                    </div>
                    <div className="col-lg-4">
                      <span>All Rooms: </span>
                      <span>5</span>
                    </div>
                    <div className="col-lg-4">
                      <span>Status: </span>
                      <span>For Rent</span>
                    </div>
                  </div>
                  <div className="row p-4 border border-light text-white bg-secondary img-thumbnail">
                    <div className="col-lg-4">
                      <span>Price: </span>
                      <span>N 50000</span>
                    </div>
                    <div className="col-lg-4">
                      <span>Parking: </span>
                      <span>1</span>
                    </div>
                    <div className="col-lg-4">
                      <span>Year Built: </span>
                      <span>2016</span>
                    </div>
                  </div>
                
                </div>
                <div className="fd-item fd-property-address">
                <div className="py-3 d-flex flex-wrap justify-content-between align-items-center">
                  <p className="lead">Address</p>
                  <a className="btn btn-primary"><span className="fw-bold px-2"><i className="fa-solid fa-1x fa-map text-white"></i></span><span className="text-capitalize">Open on google map</span></a>
                  </div>
                  <hr/>
                  <div className="row p-4 ">
                    <div className="col-lg-4 ">
                      <span className="fw-bold">Address: </span>
                      <span className="text-capitalize pb-3">23, onikanga street</span>
                      <hr/>
                    </div>
                    <div className="col-lg-4 ">
                      <span className="fw-bold">City: </span>
                      <span className="text-capitalize pb-3">Ilorin</span>
                      <hr/>
                    </div>
                    <div className="col-lg-4 ">
                      <span className="fw-bold">State: </span>
                      <span className="text-capitalize pb-3">Kwara</span>
                      <hr/>
                    </div>
                    <div className="col-lg-4 ">
                      <span className="fw-bold">Country: </span>
                      <span className="text-capitalize pb-3">Nigeria</span>
                      <hr/>
                    </div>
                    <div className="col-lg-4 ">
                      <span className="fw-bold">zip: </span>
                      <span className="text-capitalize pb-3">2309</span>
                      <hr/>
                    </div>
                    
                  </div>
                  
                </div>
                <div className="fd-item fd-features">
                  <h4 className="py-4">Features</h4>
                  <hr className="pb-1"/>
                  <div className="d-flex flex-row justify-content-start flex-wrap">
                 <div className="col-6 col-md-4">
                 <h5><span><i className="fa-solid bg-secondary rounded-circle text-white fa-1x p-1 fa-check"></i>Shower</span></h5>
                 </div>
                 <div className="col-6 col-md-4">
                 <h5><span><i className="fa-solid bg-secondary rounded-circle text-white fa-1x p-1 fa-check"></i>Park</span></h5>
                 </div>
                 <div className="col-6 col-md-4">
                 <h5><span><i className="fa-solid bg-secondary rounded-circle text-white fa-1x p-1 fa-check"></i>Meeting</span></h5>
                 </div>
                 <div className="col-6 col-md-4">
                 <h5><span><i className="fa-solid bg-secondary rounded-circle text-white fa-1x p-1 fa-check"></i>Team</span></h5>
                 </div>
                </div>
                </div>
               
              </div>
              <div className="col-lg-4">
                <div className="fd-sidebar-item">
                  <h4>Recently Added</h4>
                  <div className="recently-item">
                    <img src="/img/product1.jpeg" alt="detail" width="50px" />
                    <span>Lorem Ipsum Dolor</span>
                  </div>
                  <div className="recently-item">
                    <img src="/img/product1.jpeg" alt="detail" width="50px" />
                    <span>Lorem Ipsum Dolor</span>
                  </div>
                  <div className="recently-item">
                    <img src="/img/product1.jpeg" alt="detail" width="50px" />
                    <span>Lorem Ipsum Dolor</span>
                  </div>
                </div>
                <div className="fd-sidebar-item">
                  <h4>Category</h4>
                  <ul className="category-ul">
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                    <li>Category 4</li>
                    <li>Category 5</li>
                  </ul>
                </div>
               <div className="fd-sidebar-contact">
                   <div className="d-flex justify-content-start align-items-center flex-wrap">
                       <img style={{width: "10rem", marginRight: "1rem", borderRadius: "1rem"}} src="/img/product1.jpeg" alt="agent image" className="img-fluid" />
                        <div>
                            <h6 className="lead text-capitalize"><i className="bg-secondary rounded-circle p-2 text-white fa-solid fa-user"></i> &nbsp; Kay Surprise</h6>
                            <Link className="fw-bold" to="">View Listing</Link>
                        </div>
                   </div>

                   <div className=" my-3">
                   <div className="mb-3">
                   <input
                    type="email"
                    placeholder="email"
                    className="form-control"
                    
                  />
                  </div>
                   <div className="mb-3">
                   <input
                    type="number"
                    placeholder="Phone"
                    className="form-control"
                    
                  />
                  </div>
                   <div className="mb-3">
                   <textarea
                    col="3"
                    placeholder="message"
                    className="form-control"
                    name="message"
                  />
                 
                </div>
                   <div className="mb-3">
                   <select
                    class="form-select"
                    id="property"
                    aria-label="Default select example"
                  >
                    <option selected>What define you?</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                 
                </div>
                <div className="container-fluid" style={{padding: "0", margin: "0"}}>
                    <div className="row">
                        <div className="col-md-6"><button className="btn btn-success w-100">Message</button></div>
                        <div className="col-md-6"><a href="tel:+2348166398746" className=" w-100 btn btn-outline-success">Call</a></div>
                        <div className="col-12 mt-1"><a href="wa.me/+2348166398746" className="w-100 btn btn-outline-success"><i className="fa-brands fa-whatsapp"></i>Whatsapp</a></div>
                    </div>
                </div>
                   </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FlatDetail;
