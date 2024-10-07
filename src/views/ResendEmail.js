import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function ResendEmail() {

    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    const handleClick = async() => {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/resend_activation/`, {
            email
        })
        .then((res) =>{
            toast.success("account activated successfully")
            navigate("/")
        }).catch((err) =>{
            for(let i in err?.response?.data){
      
                toast.error(`${i}: ${err?.response?.data[i]}`)
              
            }
        })
    }

  return (
    <div className="resendemail  d-flex justify-content-center align-items-center  " style={{height: "100vh"}}>
       <div className=" " style={{width: "50vw"}}>
       <input onChange={(e) => setEmail(e.target.value)} placeholder='enter your email' type="email" className="form-control d-block " />
        <button onClick={handleClick} className="btn btn-md btn-dark mt-3">RESEND EMAIL</button>
       </div>
    </div>
  )
}

export default ResendEmail