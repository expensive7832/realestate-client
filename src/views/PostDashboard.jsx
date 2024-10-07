import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Spinner } from 'reactstrap'

const PostDashboard = () => {

  const data = useSelector((state) => state.user.data)
  const [checkFeatures, setCheckFeatures] = useState(false)

  const [postStatus, setPostStatus] = useState(false)

  const [countries, setcountries] = useState([])
  const [selectedcountry, setSelectedCountry] = useState("Nigeria")

  const [states, setstates] = useState([])
  const [selectedstate, setSelectedState] = useState("Lagos State")
  const [cities, setcities] = useState([])
  const [selectedcity, setSelectedCity] = useState(null)

  // countries api
  useEffect(() => {

    axios.get("https://countriesnow.space/api/v0.1/countries/positions")
      .then((res) => setcountries(res.data.data))
      .catch((err) => console.log(err.message))

  }, [])

  // states api
  useEffect(() => {

    axios.post("https://countriesnow.space/api/v0.1/countries/states", {
      country: selectedcountry
    })
      .then((res) => setstates(res.data.data.states))
      .catch((err) => console.log(err.message))

  }, [selectedcountry])

  // city api
  useEffect(() => {

    axios.post("https://countriesnow.space/api/v0.1/countries/state/cities", {
      country: selectedcountry,
      state: selectedstate
    })
      .then((res) => setcities(res.data.data))
      .catch((err) => console.log(err.message))

  }, [selectedstate, selectedcountry])

  const [selectedOption, setSelectedOption] = useState([])

  
  const access  = useSelector((state) => state.user.token.access)

  const navigate = useNavigate()

  const handleChange = (e) =>{
    if(e.target.checked){
      setSelectedOption((prev) => [...prev, e.target.value])
    }
  }

  const handleSignup = async(e) =>{
    e.preventDefault()

    setPostStatus(true)

    const form = new FormData(e.currentTarget)

  
    form.append("features", JSON.stringify(selectedOption))

    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/listing/`, form, {
      headers:{
        Authorization: `Bearer ${access}`
      }
    }).then((res) =>{
      setPostStatus(false)
      console.log(res.data); 
      toast.success("upload successful")

      // navigate("/dashboard/listing")
      
    })
    .catch((error) =>{
      setPostStatus(false)
      for(let err in error.response.data){
        if(error.response.data[err] == "Given token not valid for any token type"){
          navigate("/login")
        }else if(err == "expired"){
          toast.error("Subscription expired")
          navigate("/package")
        }
        toast.error(`${err}: ${error.response.data[err]}`)
      }
      
    })
  }

  let opt = [
    "swimming-pool", "cctv", "security","pop", "Jacuzzi", "Gym"
  ]


  return (
    <div id="signup">
      <section className="h-100 ">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-12">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Post Property</h3>

                    <form onSubmit={handleSignup}>
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
                              name='title'
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
                              name='purpose'
                              class="form-select"
                              id="property"
                              aria-label="Default select example"
                            >
                              <option selected>Open this select menu</option>
                              <option value="forsale">for sale</option>
                              <option value="forrent">for rent</option>

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
                              name='property'
                              class="form-select"
                              id="property"
                              aria-label="Default select example"
                            >
                              <option selected>Open this select menu</option>
                              <option value="house">House</option>
                              <option value="land">Land</option>
                              <option value="shortlet">Short Let</option>
                              <option value="eventcenter">Event Center</option>
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
                              name='room'
                              class="form-select"
                              id="property"
                              aria-label="Default select example"
                            >
                              <option value={0} selected>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                              <option value="4">Four</option>
                              <option value="5">Fifth</option>
                              <option value="6">Six</option>
                              <option value="7">Seven</option>
                              <option value="8">Eight</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-3 col-12 mb-4 my-1">
                          <div className="form-outline">
                            <label
                              className="form-label fw-bold"
                              htmlFor="form3Example1m1"
                            >
                              Bath
                            </label>
                            <select
                              name='bath'
                              class="form-select"
                              id="property"
                              aria-label="Default select example"
                            >
                              <option value={0} selected>Open this select menu</option>
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
                              name='toilet'
                              class="form-select"
                              id="property"
                              aria-label="Default select example"
                            >
                              <option value={0} selected>Open this select menu</option>
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
                            <input name='size' placeholder='enter sqft ' type="text" className="form-control" />
                          </div>
                        </div>
                      </div>

                      <div className="col-12 my-2">
                        <label htmlFor="" className="form-label fw-bold">Condition</label>

                        <div className='d-flex gap-3 flex-md-row flex-column '>
                          <div>
                            <input type="radio" value="furnished" name='condition' id="furnished" />
                            &nbsp; <label htmlFor="furnished">Furnished</label>
                          </div>
                          <div>
                            <input type="radio"  value="service" name='condition' id="service" />
                            &nbsp; <label htmlFor="service">Service</label>
                          </div>
                          <div>
                            <input type="radio"  value="newly-built" name='condition' id="newlybuilt" />
                            &nbsp; <label htmlFor="newlybuilt">Newly Built</label>
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
                              Country
                            </label>
                            <select

                              onChange={(e) => setSelectedCountry(e.target.value)}
                              name='country'
                              class="form-select"
                              id="property"
                              aria-label="Default select example"
                            >
                              {countries?.map((ctry, i) => (
                                <option selected={ctry?.name == "Nigeria"} key={i} value={ctry?.name}>{ctry?.name}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="col-md-4 col-12 mb-4 my-1">
                          <div className="form-outline">
                            <label
                              className="form-label fw-bold"
                              htmlFor="form3Example1m1"
                            >
                              State
                            </label>
                            <select
                              onChange={(e) => setSelectedState(e.target.value)}
                              name='state'
                              class="form-select"
                              id="property"
                              aria-label="Default select example"
                            >

                              {states?.map((state) => (
                                <option key={state?.name} selected={state?.name == "Lagos State"} value={state?.name}>{state?.name}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4 col-12 mb-4 my-1">
                          <div className="form-outline">
                            <label
                              className="form-label fw-bold"
                              htmlFor="form3Example1m1"
                            >
                              City
                            </label>
                            <select
                              name='city'
                              class="form-select"
                              id="property"
                              aria-label="Default select example"
                            >
                              {cities?.map((city) => (
                                <option key={city} value={city}>{city}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label fw-bold" htmlFor="form3Example8">
                          Street/Address
                        </label>
                        <input
                          name='address'
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
                              name='price'
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
                          >Images</label>
                          <input name='images' type="file" accept='image/*' multiple className="form-control" />
                        </div>

                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label fw-bold" htmlFor="form3Example8">
                          Description
                        </label>
                        <textarea
                          name='desc'
                          col="10"
                          id="form3Example8"
                          className="form-control form-control-lg"
                        />



                        <div className="form-outline mb-4">
                          <label className="form-label fw-bold" htmlFor="form3Example9">
                            Youtube Video Link
                          </label>
                          <input
                            name='youtube'
                            type="text"
                            id="form3Example9"
                            className="form-control form-control-lg"
                          />

                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label fw-bold" htmlFor="form3Example90">
                            Instagram Video Link
                          </label>
                        </div>
                        <input
                          name='instagram'
                          type="text"
                          id="form3Example90"
                          className="form-control form-control-lg"
                        />


                        <div className="features my-2" style={{ display: `${checkFeatures ? "block" : "none"}` }}>
                          <div className="d-flex aling-items-center flex-wrap justify-content-between align-items-center">

                           

                         {opt?.map((a) =>(
                             <div className="d-flex align-items-center">
                             <input
                              
                               type="checkbox"
                               value={a}
                               className="form-check"
                               id={a}
                               onChange={(e) => handleChange(e)}
                             />
                             <label
                               className="fw-bold"
                               htmlFor={a}
                             >
                               {a}
                             </label>
                           </div>
                         ))}

                          
                          </div>
                        </div>

                        <button type='button' className="btn btn-lg btn-success my-4" onClick={() => setCheckFeatures((prev) => !prev)}>{checkFeatures ? "Close Features" : "Check Features"}</button>

                      
                        <div className="d-flex justify-content-end pt-3">
                          <button type="button" className="btn btn-light btn-lg">
                            Reset all
                          </button>
                          <button
                          
                            className="btn btn-warning btn-lg ms-2"
                          >
                            {postStatus === true ?  
                            <Spinner/>
                            :
                            
                            "Submit Post"
                          }
                          </button>
                        </div>
                      </div>
                    </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PostDashboard