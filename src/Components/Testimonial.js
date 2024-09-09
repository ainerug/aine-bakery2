import React from 'react'
import Testimonial1 from '../img/testimonial-1.jpg'
import Testimonial2 from '../img/testimonial-2.jpg'
import Testimonial3 from '../img/testimonial-3.jpg'
import Testimonial4 from '../img/testimonial-4.jpg'


export default function Testimonial() {
  return (
    <div>
       <div class="container-fluid py-5">
      <div class="container">
        <div
          class="section-title position-relative text-center mx-auto mb-5 pb-3"
          style={{maxWidth: "600px"}}
        >
          <h2 class="text-primary font-secondary">Testimonial</h2>
          <h1 class="display-4 text-uppercase">Our Clients Say!!!</h1>
        </div>
        <div class="owl-carousel testimonial-carousel">
          <div class="testimonial-item bg-dark text-white border-inner p-4">
            <div class="d-flex align-items-center mb-3">
              <img
                class="img-fluid flex-shrink-0"
                src={Testimonial1}
                style= {{width: "60px", height: "60px"}}
              />
              <div class="ps-3">
                <h4 class="text-primary text-uppercase mb-1">Client Name</h4>
                <span>Profession</span>
              </div>
            </div>
            <p class="mb-0">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </p>
          </div>
          <div class="testimonial-item bg-dark text-white border-inner p-4">
            <div class="d-flex align-items-center mb-3">
              <img
                class="img-fluid flex-shrink-0"
                src={Testimonial2}
                style= {{width: "60px", height: "60px"}}
              />
              <div class="ps-3">
                <h4 class="text-primary text-uppercase mb-1">Client Name</h4>
                <span>Profession</span>
              </div>
            </div>
            <p class="mb-0">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </p>
          </div>
          <div class="testimonial-item bg-dark text-white border-inner p-4">
            <div class="d-flex align-items-center mb-3">
              <img
                class="img-fluid flex-shrink-0"
                src={Testimonial3}
                style= {{width: "60px", height: "60px"}}
              />
              <div class="ps-3">
                <h4 class="text-primary text-uppercase mb-1">Client Name</h4>
                <span>Profession</span>
              </div>
            </div>
            <p class="mb-0">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </p>
          </div>
          <div class="testimonial-item bg-dark text-white border-inner p-4">
            <div class="d-flex align-items-center mb-3">
              <img
                class="img-fluid flex-shrink-0"
                src={Testimonial4}
                style= {{width: "60px", height: "60px"}}
              />
              <div class="ps-3">
                <h4 class="text-primary text-uppercase mb-1">Client Name</h4>
                <span>Profession</span>
              </div>
            </div>
            <p class="mb-0">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
