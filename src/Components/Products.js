import React from 'react'
import Cake1 from '../img/cake-1.jpg'
import Cake2 from '../img/cake-2.jpg'
import Cake3 from '../img/cake-3.jpg'

export default function Products() {
  return (
    <div>
       <div class="container-fluid about py-5">
      <div class="container">
        <div
          class="section-title position-relative text-center mx-auto mb-5 pb-3"
          style={{maxWidth: "600px"}}
        >
          <h2 class="text-primary font-secondary">Menu & Pricing</h2>
          <h1 class="display-4 text-uppercase">Explore Our Cakes</h1>
        </div>
        <div class="tab-class text-center">
          <ul
            class="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase border-inner p-4 mb-5"
          >
            <li class="nav-item">
              <a
                class="nav-link text-white active"
                data-bs-toggle="pill"
                href="#tab-1"
                >Birthday</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" data-bs-toggle="pill" href="#tab-2"
                >Wedding</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" data-bs-toggle="pill" href="#tab-3"
                >Custom</a
              >
            </li>
          </ul>
          <div class="tab-content">
            <div id="tab-1" class="tab-pane fade show p-0 active">
              <div class="row g-3">
                <div class="col-lg-6">
                  <div class="d-flex h-100">
                    <div class="flex-shrink-0">
                      <img
                        class="img-fluid"
                        src={Cake1}
                        alt=""
                        style={{width: "150px" , height: "85px"}}
                      />
                      <h4 class="bg-dark text-primary p-2 m-0">$99.00</h4>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4"
                    >
                      <h5 class="text-uppercase">Birthday Cake</h5>
                      <span
                        >Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                        diam stet sit justo</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex h-100">
                    <div class="flex-shrink-0">
                      <img
                        class="img-fluid"
                        src={Cake1}
                        alt=""
                        style={{width: "150px" , height: "85px"}}
                      />
                      <h4 class="bg-dark text-primary p-2 m-0">$99.00</h4>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4"
                    >
                      <h5 class="text-uppercase">Birthday Cake</h5>
                      <span
                        >Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                        diam stet sit justo</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex h-100">
                    <div class="flex-shrink-0">
                      <img
                        class="img-fluid"
                        src={Cake1}
                        alt=""
                        style={{width: "150px" , height: "85px"}}
                      />
                      <h4 class="bg-dark text-primary p-2 m-0">$99.00</h4>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4"
                    >
                      <h5 class="text-uppercase">Birthday Cake</h5>
                      <span
                        >Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                        diam stet sit justo</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex h-100">
                    <div class="flex-shrink-0">
                      <img
                        class="img-fluid"
                        src={Cake1}
                        alt=""
                        style={{width: "150px" , height: "85px"}}
                      />
                      <h4 class="bg-dark text-primary p-2 m-0">$99.00</h4>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4"
                    >
                      <h5 class="text-uppercase">Birthday Cake</h5>
                      <span
                        >Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                        diam stet sit justo</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex h-100">
                    <div class="flex-shrink-0">
                      <img
                        class="img-fluid"
                        src={Cake1}
                        alt=""
                        style={{width: "150px" , height: "85px"}}
                      />
                      <h4 class="bg-dark text-primary p-2 m-0">$99.00</h4>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4"
                    >
                      <h5 class="text-uppercase">Birthday Cake</h5>
                      <span
                        >Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                        diam stet sit justo</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex h-100">
                    <div class="flex-shrink-0">
                      <img
                        class="img-fluid"
                        src={Cake1}
                        alt=""
                        style={{width: "150px" , height: "85px"}}
                      />
                      <h4 class="bg-dark text-primary p-2 m-0">$99.00</h4>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4"
                    >
                      <h5 class="text-uppercase">Birthday Cake</h5>
                      <span
                        >Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                        diam stet sit justo</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-2" class="tab-pane fade show p-0">
              <div class="row g-3">
                <div class="col-lg-6">
                  <div class="d-flex h-100">
                    <div class="flex-shrink-0">
                      <img
                        class="img-fluid"
                        src={Cake2}
                        alt=""
                        style={{width: "150px" , height: "85px"}}
                      />
                      <h4 class="bg-dark text-primary p-2 m-0">$99.00</h4>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4"
                    >
                      <h5 class="text-uppercase">Wedding Cake</h5>
                      <span
                        >Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                        diam stet sit justo</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex h-100">
                    <div class="flex-shrink-0">
                      <img
                        class="img-fluid"
                        src={Cake2}
                        alt=""
                        style={{width: "150px" , height: "85px"}}
                      />
                      <h4 class="bg-dark text-primary p-2 m-0">$99.00</h4>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4"
                    >
                      <h5 class="text-uppercase">Wedding Cake</h5>
                      <span
                        >Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                        diam stet sit justo</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex h-100">
                    <div class="flex-shrink-0">
                      <img
                        class="img-fluid"
                        src={Cake2}
                        alt=""
                        style={{width: "150px" , height: "85px"}}
                      />
                      <h4 class="bg-dark text-primary p-2 m-0">$99.00</h4>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4"
                    >
                      <h5 class="text-uppercase">Wedding Cake</h5>
                      <span
                        >Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                        diam stet sit justo</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex h-100">
                    <div class="flex-shrink-0">
                      <img
                        class="img-fluid"
                        src={Cake2}
                        alt=""
                        style={{width: "150px" , height: "85px"}}
                      />
                      <h4 class="bg-dark text-primary p-2 m-0">$99.00</h4>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4"
                    >
                      <h5 class="text-uppercase">Wedding Cake</h5>
                      <span
                        >Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                        diam stet sit justo</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex h-100">
                    <div class="flex-shrink-0">
                      <img
                        class="img-fluid"
                        src={Cake2}
                        alt=""
                        style={{width: "150px" , height: "85px"}}
                      />
                      <h4 class="bg-dark text-primary p-2 m-0">$99.00</h4>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4"
                    >
                      <h5 class="text-uppercase">Wedding Cake</h5>
                      <span
                        >Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                        diam stet sit justo</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex h-100">
                    <div class="flex-shrink-0">
                      <img
                        class="img-fluid"
                        src={Cake2}
                        alt=""
                        style={{width: "150px" , height: "85px"}}
                      />
                      <h4 class="bg-dark text-primary p-2 m-0">$99.00</h4>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4"
                    >
                      <h5 class="text-uppercase">Wedding Cake</h5>
                      <span
                        >Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                        diam stet sit justo</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-3" class="tab-pane fade show p-0">
              <div class="row g-3">
                <div class="col-lg-6">
                  <div class="d-flex h-100">
                    <div class="flex-shrink-0">
                      <img
                        class="img-fluid"
                        src={Cake3}
                        alt=""
                        style={{width: "150px" , height: "85px"}}
                      />
                      <h4 class="bg-dark text-primary p-2 m-0">$99.00</h4>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4"
                    >
                      <h5 class="text-uppercase">Custom Cake</h5>
                      <span
                        >Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                        diam stet sit justo</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex h-100">
                    <div class="flex-shrink-0">
                      <img
                        class="img-fluid"
                        src={Cake3}
                        alt=""
                        style={{width: "150px" , height: "85px"}}
                      />
                      <h4 class="bg-dark text-primary p-2 m-0">$99.00</h4>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4"
                    >
                      <h5 class="text-uppercase">Custom Cake</h5>
                      <span
                        >Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                        diam stet sit justo</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex h-100">
                    <div class="flex-shrink-0">
                      <img
                        class="img-fluid"
                        src={Cake3}
                        alt=""
                        style={{width: "150px" , height: "85px"}}
                      />
                      <h4 class="bg-dark text-primary p-2 m-0">$99.00</h4>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4"
                    >
                      <h5 class="text-uppercase">Custom Cake</h5>
                      <span
                        >Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                        diam stet sit justo</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex h-100">
                    <div class="flex-shrink-0">
                      <img
                        class="img-fluid"
                        src={Cake3}
                        alt=""
                        style={{width: "150px" , height: "85px"}}
                      />
                      <h4 class="bg-dark text-primary p-2 m-0">$99.00</h4>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4"
                    >
                      <h5 class="text-uppercase">Custom Cake</h5>
                      <span
                        >Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                        diam stet sit justo</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex h-100">
                    <div class="flex-shrink-0">
                      <img
                        class="img-fluid"
                        src={Cake3}
                        alt=""
                        style={{width: "150px" , height: "85px"}}
                      />
                      <h4 class="bg-dark text-primary p-2 m-0">$99.00</h4>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4"
                    >
                      <h5 class="text-uppercase">Custom Cake</h5>
                      <span
                        >Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                        diam stet sit justo</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex h-100">
                    <div class="flex-shrink-0">
                      <img
                        class="img-fluid"
                        src={Cake3}
                        alt=""
                        style={{width: "150px" , height: "85px"}}
                      />
                      <h4 class="bg-dark text-primary p-2 m-0">$99.00</h4>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4"
                    >
                      <h5 class="text-uppercase">Custom Cake</h5>
                      <span
                        >Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                        diam stet sit justo</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
