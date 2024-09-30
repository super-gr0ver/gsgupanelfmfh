import React from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import edup1 from "../img/eduProcess/1.JPG";
import edup2 from "../img/eduProcess/2.JPG";
import edup3 from "../img/eduProcess/3.JPG";
import edup4 from "../img/eduProcess/4.JPG";
import edup5 from "../img/eduProcess/5.JPG";
import edup6 from "../img/eduProcess/6.JPG";
import edup7 from "../img/eduProcess/7.JPG";

const images = [edup1, edup2, edup3, edup4, edup5, edup6, edup7];

export function EduProcess() {
  return (
    <div className="main-page">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        loop={true}
        slidesPerView={1}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        spaceBetween={30}
        navigation={true}
        pagination={{
          type: "fraction",
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`project${i + 1}`} className="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
// import React from "react";

// export function EduProcess() {
//   return (
//     <div className="main-page main-container structur">В разработке ...</div>
//   );
// }
