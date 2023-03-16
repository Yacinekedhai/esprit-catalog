import React from "react";

// import testimonials data
import { testimonialsData } from "../data";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../slider.css";

// import required modules
import { Pagination } from "swiper";

const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {testimonialsData.map((slide, index) => {
        // destructure slide
        const { image, message, name, web, delay } = slide;
        return (
          // slide
          <SwiperSlide
            key={index}
            className="bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px]  flex items-start gap-x-[30px] shadow-xl"
          >
            {/* avatar image */}
            <div
              style={{
                display: "flex",
                height: "100%",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
                gap: "50px",
              }}
            >
              <img
                src={image}
                alt=""
                style={{ height: "230px", width: "360px" }}
              />
              {/* text */}
              <div>
                <div className="text-lg text-primary font-bold">{name}</div>
                <div className="mb-4 font-semibold text-accent-primary">
                  {web}
                </div>
                <p className="max-w-[240px]">{message}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
