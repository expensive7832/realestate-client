import React from 'react';
import "./bestflat.css"
import {Link} from "react-router-dom"
import { FaCircleCheck } from 'react-icons/fa6';



const BestFlatItem = ({flatState}) => {
    return (
        <div className="best-estate">
            <div className="best-estate-item">
                <div className="best-estate-img-area">
                    <img className="best-estate-img" src={require("./../assets/house1.jpg")} alt="flat" />
                    <div className={`best-estate-state ${flatState ==="For Rent" ? "bg-success" : "bg-danger" }`}>{flatState}</div>
                </div>
                <div className="best-estate-content">
                    <h4><Link to="/">Lorem Ipsum</Link></h4>
                    <span><Link to="/">Lorem Ipsum</Link></span>
                </div>
                <div className="best-estate-features">
                    <div className="d-flex">
                        <div className="best-estate-feature">
                            <i className="">
                                <FaCircleCheck/>
                            </i>
                            <span>3 Beds</span>
                        </div>
                        <div className="best-estate-feature">
                        <i className="">
                                <FaCircleCheck/>
                            </i>
                            <span>2 Bathrooms</span>
                        </div>
                    </div>
                    <h5 className="best-estate-price">$650</h5>
                </div>
            </div>
        </div>
    )
}

export default BestFlatItem