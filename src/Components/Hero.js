import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import {Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Hero() {
  return (
    <div>
      <div className="container-fluid-hero">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={false}
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false, 
          }}
          speed={1000}
          modules={[Pagination, Navigation, Autoplay]} 
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide1">
            <div className="crispy">
              <h1 className="font-secondary text-primary ml-4 pt-4">
                Super Crispy
              </h1>
              <h1 className="display-1 text-uppercase text-white mb-6">
                CakeZone
              </h1>
              <h1 className="text-uppercase text-white">
                The Best Cake In Town
              </h1>
            </div>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5 pb-5 hero-button-div">
              <Link to="/cakes" className="btn btn-primary border-inner py-3 px-5 me-5">
                Our Cakes
              </Link>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide2">
            <div className="crispy">
              <h1 className="font-secondary text-primary ml-4 pt-4">
              Pure Delight
              </h1>
              <h1 className="display-1 text-uppercase text-white mb-6">
                CakeZone
              </h1>
              <h1 className="text-uppercase text-white">
              Made with Love
              </h1>
            </div>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5 pb-5 hero-button-div">
            <Link to="/cakes" className="btn btn-primary border-inner py-3 px-5 me-5">
                Our Cakes
              </Link>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide3">
            <div className="crispy">
              <h1 className="font-secondary text-primary ml-4 pt-4">
              Always Delicious
              </h1>
              <h1 className="display-1 text-uppercase text-white mb-6">
                CakeZone
              </h1>
              <h1 className="text-uppercase text-white">
              For your occasion
              </h1>
            </div>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5 pb-5 hero-button-div">
            <Link to="/cakes" className="btn btn-primary border-inner py-3 px-5 me-5">
                Our Cakes
              </Link>
            </div>
            </div>
          </SwiperSlide>
      
        
       
        </Swiper>

        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
