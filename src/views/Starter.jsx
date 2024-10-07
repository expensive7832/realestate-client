import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, CardBody, Button } from 'reactstrap'
import './starter.css'
import home from "./../assets/home.svg"
import logout from "./../assets/logout.svg"
import req from "./../assets/msg.svg"
import userIcon from "./../assets/user.svg"
import inbox from "./../assets/inbox.svg"
import axios from 'axios'
import { useSelector } from 'react-redux'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'

const Starter = () => {

  const [user, setUser] = useState(null)

  const [ctrOpen, setCtrOpen] = useState(false)

  const token = useSelector((state) => state.user?.token?.access)



  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/me/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <Container fluid className='bg-primary'>
        <Container className='px-3 text-white'>
          <h4 className=" text-white text-center text-md-start fw-bold py-3 lead">Hi, {user?.first_name}</h4>
          <div className='justify-content-between align-items-center d-flex'>
            <div className="h3 fw-bold text-white">0</div>

            <Button onClick={() => setCtrOpen(!ctrOpen)}>
              {
                !ctrOpen ?
                  <FaAngleDown /> :
                  <FaAngleUp />
              }
            </Button>
          </div>

          <h6>{new Date().toLocaleString("default", { month: "short" })} Lead</h6>
        </Container>

        <Container className="w-75 m-auto ctr py-2" style={{ display: `${ctrOpen ? "block" : "none"}` }}>
          <Row className='justify-content-between'>
            <Col className='my-2 p-3 text-white my-md-0 border border-white ' sm="12" md="4">
              <p className="lead fw-bold text-center">0 Phone Click</p>
            </Col>
            <Col className='my-2 p-3 text-white my-md-0 border border-white ' sm="12" md="4">
              <p className="lead fw-bold text-center">0 Whatsapp Click</p>
            </Col>
            <Col className='my-2 p-3 text-white my-md-0 border border-white ' sm="12" md="4">
              <p className="lead fw-bold text-center">0 Messages</p>
            </Col>
          </Row>
        </Container>

      </Container>
      <Container fluid={false}>
        <Row>
          <Col sm="12" md="6" className=''>
            <Card>
              <CardBody className='text-primary d-flex justify-content-around align-items-center'>
                <h4>Enquiries</h4>
                <p className='fw-bold'>0</p>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6" className=''>
            <Card>
              <CardBody className='text-primary d-flex justify-content-around align-items-center'>
                <h4>View</h4>
                <p className='fw-bold'>0</p>
              </CardBody>
            </Card>
          </Col>
          {/* <Col sm="12" className=''>
            <a className='btn btn-lg btn-danger w-100'>Post Property</a>
          </Col> */}
          <hr className='my-2' />
        </Row>
        <Row className='my-3'>
          <Col sm="12" md="6" className=''>
            <Card>
              <CardBody style={{ color: '#633D8A' }} className='d-flex justify-content-between align-items-center'>
                <div className='listingDesign d-flex flex-column justify-content-center align-items-center'>
                  <img src={home} alt="" />
                  <p className='mt-3 h4'>Listing</p>
                </div>
                <div className='listingText d-flex align-items-center'>
                  <div className="text text-dark">
                    <ul>
                      <li>Total Listing: 0</li>
                      <li>Visible Listing: 0</li>
                      <li>Expired Listing: 0</li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6" className=''>
            <Card>
              <CardBody style={{ color: '#633D8A' }} className='d-flex justify-content-between align-items-center'>
                <div className='listingDesign d-flex flex-column justify-content-center align-items-center'>
                  <img src={home} alt="" />
                  <p className='mt-3 h4'>Subscription</p>
                </div>
                <div className='listingText d-flex align-items-center'>
                  <div className="text text-dark">
                    <img src={logout} alt="" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6" className=''>
            <Card>
              <CardBody style={{ color: '#633D8A' }} className='d-flex justify-content-between align-items-center'>
                <div className='listingDesign d-flex flex-column justify-content-center align-items-center'>
                  <img src={req} alt="" />
                  <p className='mt-3 h4'>Request</p>
                </div>
                <div className='listingText d-flex align-items-center'>
                  <div className="text text-dark">
                    <ul>
                      <li>Total Listing: 0</li>
                      <li>Visible Listing: 0</li>
                      <li>Expired Listing: 0</li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6" className=''>
            <Card>
              <CardBody style={{ color: '#633D8A' }} className='d-flex justify-content-between align-items-center'>
                <div className='listingDesign d-flex flex-column justify-content-center align-items-center'>
                  <img src={inbox} alt="" />
                  <p className='mt-3 h4'>Message</p>
                </div>
                <div className='listingText d-flex align-items-center'>
                  <div className="text text-dark">
                    <ul>
                      <li>Total Listing: 0</li>
                      <li>Visible Listing: 0</li>
                      <li>Expired Listing: 0</li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6" className=''>
            <Card>
              <CardBody style={{ color: '#633D8A' }} className='d-flex justify-content-between align-items-center'>
                <div className='listingDesign d-flex flex-column justify-content-center align-items-center'>
                  <img src={userIcon} alt="" />
                  <p className='mt-3 h4'>Profile</p>
                </div>
                <div className='listingText d-flex align-items-center'>
                  <div className="text text-dark">
                    <ul>
                      <li>Total Listing: 0</li>
                      <li>Visible Listing: 0</li>
                      <li>Expired Listing: 0</li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Starter