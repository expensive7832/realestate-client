import React from "react";
import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import Dashboard from "./../assets/dashboard.png";
import app from "./../assets/app.png";
import customer from "./../assets/customer.png";
import home from "./../assets/home.png";
import pay from "./../assets/pay.png";
import settings from "./../assets/settings.png";
import statement from "./../assets/statement.png";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard/starter",
    icon: home,
  },
  {
    title: "Post Property",
    href: "/dashboard/postproperty",
    icon: Dashboard,
  },
  {
    title: "Listing",
    href: "/dashboard/listing",
    icon: app,
  },
  {
    title: "My Profile",
    href: "/dashboard/profile",
    icon: customer,
  },
  {
    title: "statements",
    href: "",
    icon: statement,
  },
  {
    title: "Direct Pay",
    href: "",
    icon: pay,
  },
  {
    title: "Settings",
    href: "",
    icon: settings,
  },
 

];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-2 " >
      <div className="d-flex align-items-center">
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary fw-bold nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <img src={navi.icon} />
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
