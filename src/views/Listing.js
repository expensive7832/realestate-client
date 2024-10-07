import { Button, Col, Row } from "reactstrap";
import TopCards from "../components/TopCards";
import ListItem from "../components/ListItem";
import img1 from "./../assets/house1.jpg";
import img2 from "./../assets/house2.jpg";
import img3 from "./../assets/house4.jpg";
import img4 from "./../assets/house5.jpg";
import { useEffect, useState } from "react";
import "./listing.css";
import axios from "axios";
import { useSelector } from "react-redux";




const Listing = () => {



  const[itemToShow, setItemToShow] = useState(3)
  const[removeBtn, setRemoveBtn] = useState(false)
  const[sortBy, setSortBy] = useState("des")

  const [listing, setListing] = useState([])
  const [rentTotal, setRentTotal] = useState(0)
  const [saleTotal, setSaleTotal] = useState(0)
  const [shortLetTotal, setShortLetTotal] = useState(0)


const access  = useSelector((state) => state.user.token.access)


useEffect(() => {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/getlisting/`, {
    headers:{
      Authorization: `Bearer ${access}`
    }
  })
  .then((res) => {
    setListing(res.data);

  }).catch((err) =>{
    console.log(err);
  })

  axios.get(`${process.env.REACT_APP_BACKEND_URL}/getlisting-rent/`, {
    headers:{
      Authorization: `Bearer ${access}`
    }
  })
  .then((res) => {
  
    setRentTotal(res.data);

  }).catch((err) =>{
    console.log(err);
  })

  axios.get(`${process.env.REACT_APP_BACKEND_URL}/getlisting-sale/`, {
    headers:{
      Authorization: `Bearer ${access}`
    }
  })
  .then((res) => {
  
    setSaleTotal(res.data);

  }).catch((err) =>{
    console.log(err);
  })

  axios.get(`${process.env.REACT_APP_BACKEND_URL}/getlisting-shortlet/`, {
    headers:{
      Authorization: `Bearer ${access}`
    }
  })
  .then((res) => {
  
    setShortLetTotal(res.data);

  }).catch((err) =>{
    console.log(err);
  })
}, [])

 
const handleSort = async(e) =>{
  let data = e.target.value

  if(data === "des"){
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/getlisting/`, {
      headers:{
        Authorization: `Bearer ${access}`
      }
    })
    .then((res) => {
      setListing(res.data);
  
    }).catch((err) =>{
      console.log(err);
    })
  
  }else if(data === "asc"){
   
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/getlisting-asc/`, {
      headers:{
        Authorization: `Bearer ${access}`
      }
    })
    .then((res) => {
      setListing(res.data);
  
    }).catch((err) =>{
      console.log(err);
    })
  }else if(data === "low"){
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/getlisting-low/`, {
      headers:{
        Authorization: `Bearer ${access}`
      }
    })
    .then((res) => {
      setListing(res.data);
  
    }).catch((err) =>{
      console.log(err);
    })
  }else if(data === "high"){
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/getlisting-high/`, {
      headers:{
        Authorization: `Bearer ${access}`
      }
    })
    .then((res) => {
      setListing(res.data);
  
    }).catch((err) =>{
      console.log(err);
    })
  }else if(data === "old"){
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/getlisting-old/`, {
      headers:{
        Authorization: `Bearer ${access}`
      }
    })
    .then((res) => {
      setListing(res.data);
  
    }).catch((err) =>{
      console.log(err);
    })
  }else if(data === "recent"){
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/getlisting-old/`, {
      headers:{
        Authorization: `Bearer ${access}`
      }
    })
    .then((res) => {
      setListing(res.data);
  
    }).catch((err) =>{
      console.log(err);
    })
  }
}

  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="rent"
            subtitle="Rent"
            earning={rentTotal}
            icon="fa-solid fa-house"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="sales"
            subtitle="Sales"
            earning={saleTotal}
            icon="fa-solid fa-house"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="shoplet"
            subtitle="ShopLet"
            earning={shortLetTotal}
            icon="fa-solid fa-shop"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="visible"
            subtitle="Visible"
            earning="0"
            icon="fa-solid fa-eye"
          />
        </Col>
      </Row>
      {/***LISTING */}
      
      <div className="listing">

      <div className="d-flex justify-content-between">
        <div></div>
        <div className="d-flex justify-content-center align-item-center">
          SortBy: 
          <select onChange={(e) =>handleSort(e)} className="">
            <option value="des" selected>Desc</option>
            <option value="asc">Asc</option>
            <option value="low">Low price</option>
            <option value="high">High price</option>
            <option value="old">Old Post</option>
            <option value="recent">New Post</option>
          </select>
        </div>
      </div>

        {listing?.map((listItem, i) => {
        return <ListItem data={listItem} key={i}/>
        
        })}
       
      </div>
      
    </div>
  );
};


export default Listing;
