import React, { useEffect,useState } from "react";
import Slider from "react-slick";
import { api } from './adib.js';

export default function Slider() {



    function slides() {

        api.c.getSlides().then((res) => {
            console.log('slid:', res.data.result);
            setSlid(res.data.result);
        })

    }

  
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500
    };

    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <img src="https://api.adibeshgh.com/Attachment/courseCover?filename=+" alt="" />
          </div>
          <div>
            <h3>2</h3>
          </div>
        </Slider>
      </div>
    );
}
