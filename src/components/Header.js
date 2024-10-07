import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaBars, FaHouse , FaRegCircleUser } from "react-icons/fa6";
import { isLogout } from "../Redux/Slices/userSlice";

const Header = () => {
  const [addBg, setAddBg] = useState(false);

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const { login } = useSelector((state) => state.user)

  const handleLogout = async() =>{

    dispatch(isLogout())

    navigate("/login")

    
  }

  
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window?.scrollY > 500) {
        setAddBg(true);
      } else {
        setAddBg(false);
      }
    });
  }, [addBg]);

  return (
    <div
      className="header w-100"
      style={{
        backgroundColor: addBg && "#000",
        opacity: addBg && "0.8",
        position: "fixed",
        zIndex: "10",
      }}
    >
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <div className="d-flex align-items-center">
                <FaHouse color="#fff"/>
                <span className="ms-2 text-white fw-bold">MB</span>
              </div>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i aria-hidden="true" >
                <FaBars color="#fff"/>
              </i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link className="text-white fw-bold nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="text-white nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="text-white nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="text-white nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <li class="nav-item dropdown" style={{ listStyleType: "none" }}>

              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                  <FaRegCircleUser color=""/>
                </DropdownToggle>
                <DropdownMenu>
                  
                      <li>
                        <Link class="dropdown-item" to="/rent">
                          For Rent
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/sale">
                          For Sale
                        </Link>
                      </li>

                      {login === true ?
                      <>
                      
                      <li>
                        <Link class="dropdown-item" to="/dashboard/">
                          My Dashboard
                        </Link>
                      </li>
                      
                      <li className="d-flex justify-content-center  align-items-center ">
                       <button onClick={handleLogout} className="btn-secondary w-75 m-auto btn">Logout</button>
                      </li>

                      </>
                        :

                      <li>
                        <Link class="dropdown-item" to="/login">
                          <p className="lead text-start text-primary fw-bold">Login</p>
                        </Link>
                      </li>

                      }
                  
                    
                  
                </DropdownMenu>
              </Dropdown>
            </li>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
