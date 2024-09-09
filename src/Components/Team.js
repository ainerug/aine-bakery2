import React from 'react'
import Team1 from '../img/team-1.jpg'
import Team2 from '../img/team-2.jpg'
import Team3 from '../img/team-3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Team() {
  return (
    <div>
       <div class="container-fluid py-5">
      <div class="container">
        <div
          class="section-title position-relative text-center mx-auto mb-5 pb-3"
          style={{maxWidth: "600px"}}
        >
          <h2 class="text-primary font-secondary">Team Members</h2>
          <h1 class="display-4 text-uppercase">Our Master Chefs</h1>
        </div>
        <div class="row g-5">
          <div class="col-lg-4 col-md-6">
            <div class="team-item">
              <div class="position-relative overflow-hidden">
                <img class="img-fluid w-100" src={Team1} alt="team1" />
                <div
                  class="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center"
                >
                  <div class="d-flex align-items-center justify-content-start">
                    <a
                      class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                      href="#"
                      ><i class="fab fa-twitter fw-normal"></i
                    > <FontAwesomeIcon icon={faTwitter} className='fab fa-twitter fw-normal'/></a>
                    <a
                      class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                      href="#"
                      ><i class="fab fa-facebook-f fw-normal">
                        <FontAwesomeIcon icon={faFacebook} className='fab fa-facebook fw-normal'/></i
                    ></a>
                    <a
                      class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                      href="#"
                      ><i class="fab fa-linkedin-in fw-normal">
                        <FontAwesomeIcon icon={faLinkedin} className='fab fa-linkedin fw-normal'/></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="bg-dark border-inner text-center p-4">
                <h4 class="text-uppercase text-primary">Full Name</h4>
                <p class="text-white m-0">Designation</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="team-item">
              <div class="position-relative overflow-hidden">
                <img class="img-fluid w-100" src={Team2} alt="Team2" />
                <div
                  class="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center"
                >
                  <div class="d-flex align-items-center justify-content-start">
                    <a
                      class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                      href="#"
                      ><i class="fab fa-twitter fw-normal">
                        <FontAwesomeIcon icon={faTwitter} className='fab fa-twitter fw-normal'/></i
                    ></a>
                    <a
                      class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                      href="#"
                      ><i class="fab fa-facebook-f fw-normal"></i
                    >
                    <FontAwesomeIcon icon={faFacebook} className='fab fa-facebook fw-normal'/></a>
                    <a
                      class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                      href="#"
                      ><i class="fab fa-linkedin-in fw-normal">
                        <FontAwesomeIcon icon={faLinkedin} className='fab fa-linkedin fw-normal'/></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="bg-dark border-inner text-center p-4">
                <h4 class="text-uppercase text-primary">Full Name</h4>
                <p class="text-white m-0">Designation</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="team-item">
              <div class="position-relative overflow-hidden">
                <img class="img-fluid w-100" src={Team3} alt="Team3" />
                <div
                  class="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center"
                >
                  <div class="d-flex align-items-center justify-content-start">
                    <a
                      class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                      href="#"
                      ><i class="fab fa-twitter fw-normal">
                        <FontAwesomeIcon icon={faTwitter} className='fab fa-twitter fw-normal'/></i
                    ></a>
                    <a
                      class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                      href="#"
                      ><i class="fab fa-facebook-f fw-normal"></i
                    >
                    <FontAwesomeIcon icon={faFacebook} className='fab fa-facebook fw-normal'/></a>
                    <a
                      class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                      href="#"
                      ><i class="fab fa-linkedin-in fw-normal"></i
                    >
                    <FontAwesomeIcon icon={faLinkedin} className='fab fa-linkedin fw-normal'/></a>
                  </div>
                </div>
              </div>
              <div class="bg-dark border-inner text-center p-4">
                <h4 class="text-uppercase text-primary">Full Name</h4>
                <p class="text-white m-0">Designation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
