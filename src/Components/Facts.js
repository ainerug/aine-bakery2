import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faMugHot, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

export default function Facts() {
  return (
    <div>
      <div className="facts-container container-fluid bg-img py-5 mb-5">
        <div className="container py-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 1000,
              disableOnInteraction: false, 
            }}
            loop={true}
            speed={1000}
            breakpoints={{
              

            
              530: {
                slidesPerView: 1, 
                spaceBetween: 10,
              },
             
              768: {
                slidesPerView: 2, 
                spaceBetween: 20,
              },
             
              992: {
                slidesPerView: 3, 
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
             
              <div className="col-lg-3 col-md-6">
              <div className="d-flex">
              <div
            className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
            style={{height: "60px" }}
          >
                <i className="fa fa-star text-white"></i>
                <FontAwesomeIcon
                  icon={faStar}
                  className="fa fa-star text-white"
                  style={{width:"60px", height: "30px"}}
                />
                </div>
                <div className="ps-4">
                <h6 className="text-primary text-uppercase">Our Experience</h6>
                <h1 className="display-5 text-white mb-0">12345</h1>
              </div>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="col-lg-3 col-md-6">
        <div className="d-flex">
          <div
            className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
            style={{ width: "60px", height: "60px" }}
          >
            <i className="fa fa-users text-white"></i>
            <FontAwesomeIcon
              icon={faUsers}
              className="fa fa-users text-white"
              style={{width:"60px", height: "30px"}}
            />
          </div>
          <div className="ps-4">
            <h6 className="text-primary text-uppercase">Cake Specialist</h6>
            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">
              12345
            </h1>
          </div>
        </div>
      </div>
            </SwiperSlide>
            <SwiperSlide><div className="col-lg-3 col-md-6">
        <div className="d-flex">
          <div
            className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
            style={{ width: "60px", height: "60px" }}
          >
            <FontAwesomeIcon
              icon={faCheck}
              className="fa fa-check text-white"
              style={{width:"60px", height: "30px"}}
            />
          </div>
          <div className="ps-4">
            <h6 className="text-primary text-uppercase">Complete Project</h6>
            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">
              12345
            </h1>
          </div>
        </div>
      </div></SwiperSlide>
            <SwiperSlide> <div className="col-lg-3 col-md-6">
        <div className="d-flex">
          <div
            className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
            style={{ width: "60px", height: "60px" }}
          >
            <FontAwesomeIcon
              icon={faMugHot}
              className="fa fa-mug-hot text-white"
              style={{width:"60px", height: "30px"}}
            />
          </div>
          <div className="ps-4">
            <h6 className="text-primary text-uppercase">Happy Clients</h6>
            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">
              12345
            </h1>
          </div>
        </div>
      </div></SwiperSlide>
          </Swiper>

        
        </div>
      </div>
    </div>
  );
}
