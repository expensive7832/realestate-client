import React, { Component } from "react";
import Slider from "react-slick";

import Title from "./Title"
import BestFlatItem from "./BestFlatItem"

export default class BestFlatList extends Component {
    render() {
        const title = {
            text: "Check Our Selection Of Finest Properties",
            description: "Lorem ipsum dolor sit ame"
        }
        const settings = {
            dots: true,
            infinite: false,
            loop: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          }
        return (
            <section className="section-best-estate"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Title title={title.text} description={title.description} />
                            <Slider {...settings}>
                                <BestFlatItem flatState="For Rent"  />
                                <BestFlatItem flatState="For Sale"  />
                                <BestFlatItem flatState="For Rent"  />
                                <BestFlatItem flatState="For Rent"  />
                                <BestFlatItem flatState="For Sale"  />
                                <BestFlatItem flatState="For Rent"  />
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}