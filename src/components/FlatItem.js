import React from "react";
import { Link } from "react-router-dom";
import "./flatitem.css";
import { FaBed, FaCar,  FaCirclePlus, FaHeart, FaShower, FaStar, FaUser } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5"
import { FaRegCircleCheck } from "react-icons/fa6";
const FlatItem = ({ id, image }) => {
  return (
    <div className="item">
      <div className="item-image">
        <img className="img-fluid" src={image} alt="flat" />
        <div className="topFlatList d-flex align-items-center justify-content-between">
          <span className="item-price text-uppercase">featured</span>
          <span className="item-price text-uppercase">rent</span>
        </div>
        <div className="bottomFlatList d-flex align-items-center justify-content-between">
          <span className="item-price">$1000</span>
          <div className="d-flex flex-row align-items-center justify-content-around">
            <i class="mx-2">
              <FaStar color="yellow" size={28} />
            </i>
            <i class="">
              <FaHeart color="blue" size={28} />
            </i>
            <i class="mx-2">
              <FaCirclePlus size={28} />
            </i>
          </div>
        </div>
      </div>
      <div className="item-description">
        <Link to={`/flat/${id}`} className="text-center">
          <span className="item-title">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </span>
        </Link>
        <div className="item-icon d-flex alig-items-center justify-content-between">
          <div>
            <i>
                <FaBed/>
            </i> 
            <span>3</span>
          </div>

          <div>
            <i>
                <FaShower/>
            </i>
             <span>3</span>
          </div>
          <div>
            <i>
                <FaCar/>
            </i> 
            <span>2</span>
          </div>
          <div className="item-title">
            <i className="">
                <FaRegCircleCheck  size={10}/>
            </i>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center gap-1 ">
              <i className="fw-light ">
                <FaRegUserCircle />
              </i>
            <span className="">Samuel</span>
          </div>
          <div className="d-flex align-items-center gap-1 ">
            <i class="">
              <IoCalendarOutline />
            </i>
            <span className="">2yrs</span>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default FlatItem;
