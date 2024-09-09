import React from 'react'
import AboutImage from '../img/about.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faHeartbeat } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
    <div>
      <div class="container-fluid pt-5">
      <div class="container">
        <div
          class="section-title position-relative text-center mx-auto mb-5 pb-3"
          style= {{maxWidth: '600px'}}
        >
          <h2 class="text-primary font-secondary">About Us</h2>
          <h1 class="display-4 text-uppercase">Welcome To CakeZone</h1>
        </div>
        <div class="row gx-5">
          <div class="col-lg-5 mb-5 mb-lg-0" style={{minHeight: '400px'}}>
            <div class="position-relative h-100">
              <img
                class="position-absolute w-100 h-100"
                src={AboutImage} alt="aboutpicture"
                style={{objectFit: 'cover'}}
              />
            </div>
          </div>
          <div class="col-lg-6 pb-5">
            <h4 class="mb-4">
              Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem
              sed stet labore lorem sit clita duo
            </h4>
            <p class="mb-5">
              Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
              tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore
              lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore
              erat amet magna
            </p>
            <div class="row g-5">
              <div class="col-sm-6">
                <div
                  class="d-flex align-items-center justify-content-center bg-primary border-inner mb-4"
                  style={{width: "90px", height: "90px"}}
                >
                  <i class="fa fa-heartbeat fa-2x text-white"></i>
                  <FontAwesomeIcon icon={faHeartbeat} className='fa fa-heartbeat fa-2x text-white'/>
                </div>
                <h4 class="text-uppercase">100% Healthy</h4>
                <p class="mb-0">
                  Labore justo vero ipsum sit clita erat lorem magna clita
                  nonumy dolor magna dolor vero
                </p>
              </div>
              <div class="col-sm-6">
                <div
                  class="d-flex align-items-center justify-content-center bg-primary border-inner mb-4"
                  style={{width: "90px", height: "90px"}}
                >
                  <i class="fa fa-award fa-2x text-white"></i>
                  <FontAwesomeIcon icon={faAward} className='fa fa-award fa-2x text-white'/>
                </div>
                <h4 class="text-uppercase">Award Winning</h4>
                <p class="mb-0">
                  Labore justo vero ipsum sit clita erat lorem magna clita
                  nonumy dolor magna dolor vero
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
