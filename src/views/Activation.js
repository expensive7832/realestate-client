import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function Activation() {

  const { uid, token } = useParams()

  const navigate = useNavigate()

 useEffect(() =>{
  axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/activation/`, {
    uid,
    token
  })
  .then((res) => {
    console.log(res.data)
  navigate("/")
  })
  .catch((err) => {
    for(let i in err?.response?.data){
      
        toast.error(`${i}: ${err?.response?.data[i]}`)
      
    }

    navigate("/resend_email")
  })
 }, [])

  return (
    <></>
  )
}

export default Activation 