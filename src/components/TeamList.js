import React from 'react';
import Title from "./Title"
import TeamItem from "./TeamItem"
import Slider from 'react-slick';

const TeamList = () => {
    const title = {
        text: "Meet Our Agent",
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
    
        <section className="section-teams container">
             <Title title={title.text} description={title.description} />
            <div className="bg-white">
           
                <Slider {...settings}>
                    <TeamItem/>
                    <TeamItem/>
                    <TeamItem/>
                    <TeamItem/>
                </Slider>
            </div>
        </section>
        
    )
}

export default TeamList;