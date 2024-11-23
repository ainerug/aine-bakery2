import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Service() {
  return (
    <div>
      <div
      class="container-fluid service position-relative px-5 mt-5"
      style={{marginBottom: "135px"}}
    >
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-4 col-md-6">
            <div class="bg-primary border-inner text-center text-white p-5">
              <h4 class="text-uppercase mb-3">Birthday Cake</h4>
              <p>
              Celebrate with our delicious, custom-made birthday cakes, perfect for every special occasion.
              </p>
              <Link to="/cakes" class="text-uppercase text-dark" href=""
                >Explore <i class="bi bi-arrow-right"></i
              ><FontAwesomeIcon icon={faArrowRight} className='bi bi-arrow-right'/></Link>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="bg-primary border-inner text-center text-white p-5">
              <h4 class="text-uppercase mb-3">Wedding Cake</h4>
              <p>
              Our wedding cakes are designed to be as beautiful as your special day, crafted with love and attention to detail.
              </p>
              <Link to="/cakes" class="text-uppercase text-dark" href=""
                >Explore <i class="bi bi-arrow-right"></i
              ><FontAwesomeIcon icon={faArrowRight} className='bi bi-arrow-right'/></Link>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="bg-primary border-inner text-center text-white p-5">
              <h4 class="text-uppercase mb-3">Custom Cake</h4>
              <p>
              Create your perfect custom cake with unique flavors and designs tailored to your preferences for any occasion
              </p>
              <Link to="/cakes" class="text-uppercase text-dark" href=""
                >Explore <i class="bi bi-arrow-right"></i
              ><FontAwesomeIcon icon={faArrowRight} className='bi bi-arrow-right'/></Link>
            </div>
          </div>
          <div class="col-lg-12 col-md-6 text-center">
            <h1 class="text-uppercase text-light mb-4">
            Celebrate with Our Special Cakes
            </h1>
            <Link to= "/cakes" className="btn btn-primary border-inner py-3 px-5"
              >Order Now</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
