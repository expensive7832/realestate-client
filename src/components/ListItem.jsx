import React, { useState } from "react";
import { Col, Container, Row, Card, CardBody, CardHeader, CardFooter } from "reactstrap";
import placeHolder from "./../assets/listplaceholder.jpg";
import "./listitem.css";
import { FaPenSquare , FaHandshake, FaTrash} from "react-icons/fa";

const ListItem = ({ data }) => {

  return (
    <div id="listitem">
      <Container className="py-2" style={{ backgroundColor: "#f3f4f5" }}>
        <Row className="my-3 d-flex justify-content-between align-items-center">
          <Col sm="12" md="5" className="">
            <div className="img ">
              {data?.postimage.length === 0 ? (
                <img src={placeHolder} alt="house uploaded" />
              ) : (
                <img src={data?.postimage[0]?.image} alt={data?.postimage[0]?.imageid} />
              )}
            </div>
          </Col>
          <Col sm="12" md="7" className="">
            <div className="content ">
              <>
               <div className="d-flex align-items-center justify-content-between ">
                  <p>{data?.title}</p>
                  <div className="ctrlbtn d-flex">
                  <button className="btn">
                    <FaPenSquare size={22} color="#01e"/>
                  </button>
                  <button className="btn">
                    <FaTrash size={22} color="red"/>
                  </button>
                  </div>
                </div>
             
                <div className="d-flex justify-content-between">
                  <h6>₦ {data?.price}</h6>
                  <button className="btn btn-outline-secondary rounded-pill ">
                    {data?.type === "" ? "unknown" : data?.type}
                  </button>
                </div>
                <>
                  Date Posted: <br /> {new Date(data?.datePosted).toLocaleString()}
                </>
              </>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListItem;
