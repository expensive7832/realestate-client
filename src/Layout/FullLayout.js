import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";
import "./../assets/scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";


const FullLayout = () => {
  return (
    <main>
       <Header />

      <div className="pageWrapper d-lg-flex bg-white">
        {/********Sidebar*********   */}
        <aside style={{backgroundColor: "#E1E3FB"}} className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        
        <div className="contentArea bg-white">
          
          <Container className="wrapper" fluid>
            <Outlet />
          </Container>
        </div>
   
      </div>
    </main>
  );
};

export default FullLayout;
