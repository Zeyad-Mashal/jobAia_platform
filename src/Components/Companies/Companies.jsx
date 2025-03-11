import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import slide1 from "../../assets/images/samsung.png";
import slide2 from "../../assets/images/Huawei.jpg";
import slide3 from "../../assets/images/oppo.png";
import slide4 from "../../assets/images/vivo.png";
import slide5 from "../../assets/images/iphone.jpg";
import "./Companies.css";
const Companies = () => {
  return (
    <>
      <section className="py-5 companies">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-16">
            Join Egypt's Top Companies
          </h2>
          <div className="slider-container">
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                350: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={slide1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide5} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Companies;
