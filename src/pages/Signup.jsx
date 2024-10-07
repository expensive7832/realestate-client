import axios from './api'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { FaEye } from "react-icons/fa"
import "./signup.css"
import { Spinner } from "reactstrap"
import {useNavigate} from "react-router-dom"
const Signup = () => {

  const [showpwd, setpwd] = useState(false)
  const [showrpwd, setrpwd] = useState(false)
  const [status, setStatus] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()

    setStatus(true)

    let form = new FormData(e.currentTarget)

    await axios.post("/register/", form)
    .then((res) => {
      setStatus(false)
      toast.success("Account Created Successfully")

      navigate("/login")
      
    })
    .catch((err) =>{
      setStatus(false)
      for(let i in err?.response?.data){
        if(i === "password"){
          err?.response?.data[i]?.map((each) =>(
            toast.error(each)
          ))
        }else{
          toast.error(`${i}: ${err?.response?.data[i]}`)
        }
    
      }
      
    })


  }

  return (
    <div id="signup">
    <section className="h-100 bg-muted">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample photo" className="img-fluid" style={{borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem'}} />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">
                      Signup 
                    </h3>
                    <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="row">

                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input name='first_name' type="text" id="fname" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="fname">
                            First name
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input name='last_name' type="text" id="lname" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="lname">
                            Last name
                          </label>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="form-outline">
                          <input name='email' type="email" id="email" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <div className="d-flex justify-content-md-between position-relative  ">
                          <input type={`${showpwd ? "text" : 'password'}`} name="password" id="password" className="" />
                          <button type='button' onClick={() => setpwd((prev) =>!prev)} className='btn'><FaEye/></button>
                          </div>
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                        </div>
                      </div>
                      
                     

                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input name='phone' type="text" id="phone" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="phone">
                            Phone
                          </label>
                        </div>
                      </div>

                      
                      <div className="col-md-6 mb-4">
                      <button className="btn btn-secondary btn-lg ms-2">
                        {status ? <Spinner/> : "Submit form"}
                      </button>
                      </div>
                     
                    </div>
                 
                      
                    </form>

                    <div className="text-center mt-3">
                
                <p>or sign up with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-facebook-f" />
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-google" />
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-twitter" />
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-github" />
                </button>
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
  )
}

export default Signup