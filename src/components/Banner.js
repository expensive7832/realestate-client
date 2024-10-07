import {React, useEffect, useState } from "react"
import banner from "../banner.jpg"
import { Link } from "react-router-dom";
import "./banner.css"


const Banner = () => {
    const [search, setSearch] = useState();
    const [find, setFind] = useState([]);
    const [word, setWord] = useState("");
    const [activeTab, setActiveTab] = useState("for rent");

    useEffect(() => {
        setSearch(["a","b","test", "mb"])
    }, [])

    const findSearch = (e) => {
        setWord(e.target.value)
        const filteredCountries = search.filter(item => item.indexOf(e.target.value) > -1 ? item : null);
        e.target.value.length === 0 ? setFind([]) : setFind(filteredCountries);
    }
    const findResult = () => {
        if (find.length === 0 && word.length > 0) {
            return <div className="find-search">Not Found</div>
        }
        if (find.length > 0) {
            return <div className="find-search">
                {
                    find.map(item => {
                        return <Link key={item} to="#">{item}</Link>
                    })
                }
            </div>
        }
    }

    const changeTab = (tab) =>{
        if(tab === 1){
            setActiveTab("for rent")
        }else{
            setActiveTab("for sale")
        }
    }



    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(${banner})` }}>
    
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <h2 className="mt-5 mb-4 banner-title"><strong>Welcome To Houzez </strong> </h2>
                                <p>Houzez is an innovative real estate WordPress theme that helps to ensure your website’s success in this super-competitive market.</p>
                                <div className="searchBox">

                                <ul className="nav nav-tabs justify-content-center">
                                    <li className="nav-item">
                                        <p onClick={() => changeTab(1)} className={`nav-link ${activeTab === "for rent" && "active"}`} aria-current="page" to="#">For Rent</p>
                                    </li>
                                    <li className="nav-item">
                                        <p onClick={() => changeTab(2)} className={`nav-link ${activeTab === "for sale" && "active"}`} to="#">For Sale</p>
                                    </li>
                                    
                                    </ul>
                                {
                                    activeTab === "for rent" ?
                                    <div className="search-area container">
                                    <div className="row py-0 pt-3 py-md-3">

                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>

                                    <select className="form-select mx-0 mx-md-2" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    
                                    <select className="form-select " aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>

                                     <div className="col"><button className="btn-search m-2">Search</button></div>
                                    </div>
                                    </div>
                                :
                                
                                <>
                                
                                <div className="search-area container">
                                    <div className="row py-0 pt-3 py-md-3">

                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>

                                    <select className="form-select mx-0 mx-md-2" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    
                                    <select className="form-select " aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>

                                     <div className="col"><button className="btn-search m-2">Search</button></div>
                                    </div>
                                </div>
                                    
                                </>

                                }

                                </div>
                                {findResult()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;