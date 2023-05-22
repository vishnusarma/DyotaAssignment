import React from 'react';
import './Carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo1 from '../Assets/lo1.svg';
import logo2 from '../Assets/lo2.svg';
import logo3 from '../Assets/lo3.svg';
import logo4 from '../Assets/lo4.svg';
import logo5 from '../Assets/lo5.svg';
import logo6 from '../Assets/lo6.svg';
import logo7 from '../Assets/lo7.svg';
import logo8 from '../Assets/lo8.svg';
import logo9 from '../Assets/109.svg';
import logo10 from '../Assets/l09.svg';

const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <div className="carousel-container">
      <h1>Trusted By</h1>
        <Slider {...settings}>
          <div>
            <img src={logo1} alt="img" className="carousel-image" />
          </div>
          <div>
            <img src={logo2} alt="img" className="carousel-image" />
          </div>
          <div>
            <img src={logo3} alt="img" className="carousel-image" />
          </div>
          <div>
            <img src={logo4} alt="img" className="carousel-image" />
          </div>
          <div>
            <img src={logo5} alt="img" className="carousel-image" />
          </div>
          <div>
            <img src={logo6} alt="img" className="carousel-image" />
          </div>
          <div>
            <img src={logo7} alt="img" className="carousel-image" />
          </div>
          <div>
            <img src={logo8} alt="img" className="carousel-image" />
          </div>
          <div>
            <img src={logo9} alt="img" className="carousel-image" />
          </div>
          <div>
            <img src={logo10} alt="img" className="carousel-image" />
          </div>
          </Slider>
      </div>
    );
  };
  export default Carousel;