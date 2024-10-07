import React, { useEffect, useState } from "react";
import "./profile.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaCamera } from "react-icons/fa";
import { Spinner } from "reactstrap"
import userplaceholder from "./../assets/users.webp"
import { FaFacebook, FaPenToSquare, FaTrashCan, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { setData } from "../Redux/Slices/userSlice";

const MyProfile = () => {

  const [user, setUser] = useState(null)

  const [imgUploadStatus, setImgUploadStatus] = useState(false)

  const access = useSelector((state) => state.user.token.access)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/profile/`, {
      headers: {
        Authorization: `Bearer ${access}`
      }
    })
      .then((res) => {
        dispatch(setData(res.data))
        setUser(res.data)
      })
      .catch((e) => {
        // Object.entries(e.response.data).map(err =>(
        // ))
        toast.error(e.response.data.detail)

        navigate("/login")

      })


  }, [imgUploadStatus])

  const handleUploadProfile = async (e) => {
    setImgUploadStatus(true)
    const form = new FormData()

    form.append("image", e)

    await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/uploadphoto/`, form, {
      headers: {
        Authorization: `Bearer ${access}`
      }
    }).then((res) => {
      setImgUploadStatus(false)
    
    })
      .catch((error) => {
        setImgUploadStatus(false)
        for (let err in error.response.data) {
          toast.error(`${err}: ${error.response.data[err]}`)
        }

      })
  }

  return (
    <div id="profile">
      <section >
        <div className="container py-5">
          <div className="row  ">
            <div className="col-lg-4 ">
              <div className="card bg-white mb-4">
                <div className="card-body text-center">
                  <img
                    src={user?.image === "" ? userplaceholder : user?.image}
                    alt="avatar"
                    className="position-relative profilepic rounded-circle img-fluid"

                  />
                  {imgUploadStatus === true ?
                    <Spinner />
                    :

                    <div className="changeImg position-absolute top-50  start-50 translate-middle">
                      <label htmlFor="changeimg">

                        <FaCamera />

                      </label>

                      <input onChange={(e) => handleUploadProfile(e.target.files[0])} id="changeimg" type="file" hidden />
                    </div>
                  }

                  <h5 className="my-3 text-capitalize ">
                   {user?.first_name + " "}  {user?.last_name}
                  </h5>

                  <p className="text-muted mb-4 ">{user?.address}</p>

                </div>
                <div className="gap-4 mb-2 d-flex justify-content-center">
                  <a><FaFacebook size={24} /></a>
                  <a><FaTwitter size={24} /></a>
                  <a><FaWhatsapp size={24} /></a>
                </div>
              </div>

            </div>
            <div className="col-lg-8">

            <div className="bg-dark text-white my-3">
                     
                     <h6> {user?.sub_details?.sub_data?.mid?.title}</h6>

                     <p>{user?.sub_details?.active ? "Active" : "No Active Plan"}</p>

                     <p>{user?.sub_details?.remain}</p>

                     
                      
              </div>


              <div className="card bg-white mb-4">
                <div className="card-body">
                  <div className="row">

                   
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {user?.first_name + " "}  {user?.last_name}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {user?.email}

                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {user?.phone}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {user?.phone}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {user?.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex  justify-content-end my-3">
                <i class="">
                  <FaPenToSquare />
                </i>
                <i class="">
                  <FaTrashCan />
                </i>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
