import React from "react";
import "./testimonials.css";
import CERT1 from "../../assets/certificate1.png";
import CERT2 from "../../assets/certificate2.png";
import CERT3 from "../../assets/certificate3.png";
import CERT4 from "../../assets/certificate4.png";
import CERT5 from "../../assets/certificate5.png";
import CERT6 from "../../assets/certificate6.png";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>My Achievements</h5>
      <h2>Certificates</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div>
            <img src={CERT5} alt="" className="certificate__image" />
            <h3>Outstanding Volunteer Award in IEEE WIE AG</h3>
            <h5>India Council</h5>
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div>
            <img src={CERT1} alt="" className="certificate__image" />
            <h3>Competitive Programming in C++</h3>
            <h5>Coding Ninjas</h5>
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div>
            <img src={CERT2} alt="" className="certificate__image" />
            <h3>ReactJS Full Stack Development</h3>
            <h5>Coding Ninjas</h5>
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div>
            <img src={CERT6} alt="" className="certificate__image" />
            <h3>Completion of Foundation level BSc degree courses</h3>
            <h5>IIT, Madras</h5>
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div>
            <img src={CERT3} alt="" className="certificate__image" />
            <h3>Data Structures &amp; Algorithms</h3>
            <h5>Coding Ninjas</h5>
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div>
            <img src={CERT4} alt="" className="certificate__image" />
            <h3>Full Stack Web development</h3>
            <h5>Coding Ninjas</h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
