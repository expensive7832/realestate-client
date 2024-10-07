import React from "react";
import Slider from "react-slick";
import Title from "./Title";
import ReferenceItem from "./TestimonialItem";

const Testimonial = () => {
  const title = {
    text: "Testimony",
    description: "Lorem ipsum dolor sit ame",
  };

  const settings = {
    infinite: true,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    autoPlayTimeout: 5000,
    autoplayHoverPause: true,
    animateIn: "animate__flash",
    animateOut: "animate_swing",
    lazyLoad: true,
    navSpeed: 10000,
    smartSpeed: 10000,
    fluidSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1024: {
        items: 4,
      },
    },
  };

  return (
    <section className="section-references" >
     
      <div className="container my-5 ">
      <Title
        title={title.text}
        description={title.description}
        style={{ position: "relative", zIndex: "10" }}
      />
        <Slider  className="owl-theme">
          <ReferenceItem />
          <ReferenceItem />
          <ReferenceItem />
          <ReferenceItem />
          <ReferenceItem />
          <ReferenceItem />
        </Slider>
      </div>

      <div class="custom-shape-divider-bottom-1651073178">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>
    </section>
  );
};

export default Testimonial;
