import React from 'react';
import Title from "./Title";
import FlatItem from "./FlatItem";
import Slider from "react-slick";

import './flatitem.css';


const FlatList = () => {
  const title = {
    text: "Discover Our Featured Listings",
    description: "Lorem ipsum dolor sit ame",
  };

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
    <section className="section-all-re">
      <div className="container flat">
        <Title title={title.text} description={title.description} />
        <Slider
        {...settings}
        >
          <FlatItem
            className="item"
            slug="lorem-ipsum-1"
            image={require("./../assets/house1.jpg")}
          />
          <FlatItem className="item" id="2" image={require("./../assets/house1.jpg")}/>
          <FlatItem className="item" id="3" image={require("./../assets/house2.jpg")} />
          <FlatItem className="item" id="4" image={require("./../assets/house4.jpg")} />
          <FlatItem className="item" id="4" image={require("./../assets/house5.jpg")} />
          <FlatItem className="item" id="4" image={require("./../assets/house2.jpg")} />
         
        </Slider>
      </div>
    </section>
  );
};

export default FlatList;
