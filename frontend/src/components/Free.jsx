import React, {useEffect, useState} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Card from './Card';


import list from '../../public/list.json'

function Free() {
  const filterData = list.filter((data) => data.category === "Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
            <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
          Perfect for those new to baking, our free beginner courses cover the basics, including fundamental techniques, essential tools, and simple yet delicious recipes to get you started on your baking journey.
          </p>
          </div>
        </div>
        
        <div>
        <Slider {...settings}>
          {filterData.map((item)=>(<Card item={item} key={item.id}/>
        
        ))}
      </Slider>
        </div>
        </div>
    </>
  )
}

export default Free
