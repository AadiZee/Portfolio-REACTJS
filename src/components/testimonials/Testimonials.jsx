import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, expedita. Illum laboriosam laudantium at, odit soluta temporibus ipsa iure, placeat culpa, numquam natus recusandae iste similique? Fuga assumenda officia error.",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, expedita. Illum laboriosam laudantium at, odit soluta temporibus ipsa iure, placeat culpa, numquam natus recusandae iste similique? Fuga assumenda officia error.",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, expedita. Illum laboriosam laudantium at, odit soluta temporibus ipsa iure, placeat culpa, numquam natus recusandae iste similique? Fuga assumenda officia error.",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Fatimah Khan",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, expedita. Illum laboriosam laudantium at, odit soluta temporibus ipsa iure, placeat culpa, numquam natus recusandae iste similique? Fuga assumenda officia error.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((review) => (
          <SwiperSlide className="testimonial" key={review.id}>
            <div className="client__avatar">
              <img src={review.avatar} alt={review.name} />
            </div>
            <h5 className="client__name">{review.name}</h5>
            <small className="client__review">{review.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
