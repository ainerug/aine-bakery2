import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import Testimonial1 from "../img/testimonial-1.jpg";
import Testimonial2 from "../img/testimonial-2.jpg";
import Testimonial3 from "../img/testimonial-3.jpg";
import Testimonial4 from "../img/testimonial-4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faQuoteLeftAlt,
  faQuoteRightAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Testimonial() {
  return (
    <div>
      <div class="section-title position-relative text-center mx-auto mb-5 pb-3">
        <h2 class="text-primary font-secondary">Testimonial</h2>
        <h1 class="display-4 text-uppercase">Our Clients Say!!!</h1>
      </div>
      <div className="testimonial-container">
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1000}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="review pt-5 text-center pb-5 pl-5 pr-5">
                <h3 className="text-primary pb-3">Sarah Johnson</h3>
                <div>
                  <div className="swiper-img justify-center items-center">
                    <img src={Testimonial1} alt="testimonial1" width="100px" />
                  </div>
                </div>
                <h4 className="pb-3 pt-3 text-primary">Event Planner</h4>

                <p>
                  {" "}
                  <FontAwesomeIcon
                    icon={faQuoteLeftAlt}
                    className="quate-icon-left"
                  />{" "}
                  The wedding cake we ordered was nothing short of spectacular!
                  Beautifully designed and deliciously moist, it was the
                  centerpiece of the reception and received endless compliments!
                  <FontAwesomeIcon
                    icon={faQuoteRightAlt}
                    className="quate-icon-right"
                  />
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="review pt-5 text-center pb-5 pl-5 pr-5">
                <h3 className="text-primary pb-3">David Lee</h3>
                <div>
                  <div className="swiper-img">
                    <img src={Testimonial2} alt="testimonial1" width="100px" />
                  </div>
                </div>
                <h4 className="pb-3 pt-3 text-primary">Food Blogger</h4>
                <p>
                  {" "}
                  <FontAwesomeIcon
                    icon={faQuoteLeftAlt}
                    className="quate-icon-left"
                  />{" "}
                  This bakery creates the most stunning birthday cakes! Each one
                  is a work of art, the flavors are unique and incredibly rich,
                  making every celebration unforgettable!
                  <FontAwesomeIcon
                    icon={faQuoteRightAlt}
                    className="quate-icon-right"
                  />
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="review pt-5 text-center pb-5 pl-5 pr-5">
                <h3 className="text-primary pb-3">Emma Brown</h3>
                <div>
                  <div className="swiper-img">
                    <img src={Testimonial4} alt="testimonial1" width="100px" />
                  </div>
                </div>
                <h4 className="pb-3 pt-3 text-primary">Teacher</h4>
                <p>
                  {" "}
                  <FontAwesomeIcon
                    icon={faQuoteLeftAlt}
                    className="quate-icon-left"
                  />{" "}
                  For my daughter's birthday, we ordered a cake decorated with
                  her favorite characters, and it was perfect! Everyone loved
                  it, especially the kids!
                  <FontAwesomeIcon
                    icon={faQuoteRightAlt}
                    className="quate-icon-right"
                  />
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="review pt-5 text-center pb-5 pl-5 pr-5">
                <h3 className="text-primary pb-3">Mark Thompson</h3>
                <div>
                  <div className="swiper-img">
                    <img src={Testimonial3} alt="testimonial1" width="100px" />
                  </div>
                </div>
                <h4 className="pb-3 pt-3 text-primary">Business Owner</h4>
                <p>
                  {" "}
                  <FontAwesomeIcon
                    icon={faQuoteLeftAlt}
                    className="quate-icon-left"
                  />{" "}
                  I ordered a custom cake for my anniversary, and it exceeded
                  all expectations! The design was elegant, and the flavor was
                  divine. This bakery is my go-to for any special occasion!
                  <FontAwesomeIcon
                    icon={faQuoteRightAlt}
                    className="quate-icon-right"
                  />
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
}
