import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
  Badge,
} from "reactstrap";
import Logo from "../assets/daxlinkLogo.png";
import searchIcon from "../assets/searchIcon.png";
import profile from "../assets/profileimage.png";
import notification from "../assets/notification.png";
import Arrow from "../assets/Arrow.png";
import { FaEllipsisVertical, FaList, FaRectangleXmark } from "react-icons/fa6";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleNotification = () => setNotificationOpen((prevState) => !prevState);
 
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  return (
    <Navbar className="navbar" dark expand="md">
      <div className="d-flex align-items-center">
        <Button
          color="primary"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i>
            <FaList/>
          </i>
        </Button>
      </div>

      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i >
              <FaRectangleXmark/>
            </i>
          ) : (
            <i >
              <FaEllipsisVertical/>
            </i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link
              to="/starter"
              className="nav-link"
              style={{
                color: "7B7B7B",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              EasyHome
            </Link>
          </NavItem>
        </Nav>
        <DropdownToggle color="">
          <img src={searchIcon} className="img-fluid" alt="search icon" />
        </DropdownToggle>
        
        <Dropdown isOpen={notificationOpen} toggle={toggleNotification}>
        <DropdownToggle>
        <img
                src={notification}
                alt="profile"
                className="img-fluid position-relative"
      
            />
          <Badge style={{paddingBottom:"-1rem" }} className="m-auto position-absolute start-50 translate-middle badge rounded-pill" color="success">78+</Badge>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>News</DropdownItem>
            <DropdownItem>Buhari is here</DropdownItem>
            <DropdownItem>Edit Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>My Balance</DropdownItem>
            <DropdownItem>Inbox</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle>
            <img
              src={profile}
              alt="profile"
              className="rounded-circle img-fluid"
            ></img>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Info</DropdownItem>
            <DropdownItem>My Account</DropdownItem>
            <DropdownItem>Edit Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>My Balance</DropdownItem>
            <DropdownItem>Inbox</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Button style={{border: "none", backgroundColor: "#fff", }}>
        <img src={Arrow} alt="arrow down button" />
        </Button>

      </Collapse>
    </Navbar>
  );
};

export default Header;
