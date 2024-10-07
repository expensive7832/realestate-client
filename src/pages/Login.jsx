import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import axios from "axios"
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addToken, isLogin } from '../Redux/Slices/userSlice'

const Login = () => {

  const passwordRef = useRef()

  const [ptype, setPtype] = useState("password")

  const handlePassword = () => {
    if(ptype === 'password') {
      passwordRef.current.type = "text"
      setPtype("text")
    }else{
      passwordRef.current.type = "password"
      setPtype("password")
    }
  }

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = async(e) =>{
      e.preventDefault()
      const form = new FormData(e.currentTarget)
      
     
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/jwt/create/`, form)
        .then((res) => {
          dispatch(isLogin())
          dispatch(addToken(res?.data))
          toast.success("login successful")
          navigate("/")
        })
        .catch((e) => (
          Object.entries(e.response.data).map(err =>(
            toast.error(`${err[0]}: ${err[1]}`)
          ))
        ))
        
      
  }

  return (
    <div id="login" className=''>
      <section className="background-radial-gradient overflow-hidden">
  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex: 10}}>
        <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: 'hsl(218, 81%, 95%)'}}>
          The best offer <br />
          <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span>
        </h1>
        <p className="mb-4 opacity-70" style={{color: 'hsl(218, 81%, 85%)'}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
        </p>
      </div>
      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
        <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form onSubmit={(e) => handleSubmit(e)}>
              
              <div className="form-outline mb-4">
                <input name="email" type="email" id="form3Example3" className="form-control" />
                <label className="form-label" htmlFor="form3Example3">Email address</label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-4 position-relative ">
                <input ref={passwordRef} name="password" type="password" id="form3Example4" className="form-control" />
                <button type='button' onClick={handlePassword} className='fa-solid fa-eye position-absolute ' ></button>
                <label className="form-label" htmlFor="form3Example4">Password</label>
              </div>
           
              
              {/* Submit button */}
             
             <button type="submit" className="btn btn-primary w-100 btn-block mb-4">
                Login
              </button>
             
            </form>
              {/* Register buttons */}
              <div className="text-center">
                <div className="d-flex justify-content-center gap-4 ">
                  <p>new user ?</p>
                  <Link to={"/signup"}>Register</Link>
                </div>
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
</section>

    </div>
  )
}

export default Login