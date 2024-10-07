import React from "react"
import FlatList from "./FlatList"
import Banner from "./Banner"
import Subscribe from "./Subscribe"
import BestFlatList from "./BestFlatList"
import Crm from "./Crm"
import TeamList from "./TeamList"
import References from "./Testimonial"
import Footer from "./Footer"
import Header from "./Header"


const Home=()=>{
    return (
        <>
         <Header />
         <Banner style={{position: "absolute"}}/>
            <FlatList/>
            <Crm/>
            <BestFlatList/>
            <Subscribe/>
            <TeamList/>
            <References/>
            <Footer/>
        </>
    )
}

export default Home;