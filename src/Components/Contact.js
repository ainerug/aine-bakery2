import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { contactSchema } from "../Validation/ContactsValidation";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";

export default function Contact() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const subjectRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const { values, errors, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema,
    onSubmit: () => {
      handleForm();
    },
  });

  const handleForm = () => {
    const payload = {
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      name: nameRef.current.value,
      message: messageRef.current.value,
    };

    axios
      .post("https://cake-shop-kwrq.onrender.com/sendmail", payload)
      .then((res) => {
        console.log(res);
        NotificationManager.success("Message has been sent successfully!");
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        NotificationManager.error("Something went wrong!");
      });
  };

  return (
    <div className="contact-container">
      <NotificationContainer />
      <div
        className=" container-fluid contact position-relative px-5"
        style={{ marginTop: "90px" }}
      >
        <div className="container">
          <div className="row g-5 mb-5">
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary border-inner text-center text-white p-5">
                <FontAwesomeIcon
                  icon={faMapMarkedAlt}
                  className="location-icon fs-1 text-white me-3"
                />
                <h6 className="text-uppercase my-2">Our Office</h6>
                <span>123 Street, New York, USA</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary border-inner text-center text-white p-5">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="envelope-icon fs-1 text-white me-3"
                />
                <h6 className="text-uppercase my-2">Email Us</h6>

                <a href="mailto:info@example.com" className="contact-links">
                  info@example.com
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary border-inner text-center text-white p-5">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="phone-icon fs-1 text-white me-3"
                />
                <h6 className="text-uppercase my-2">Call US</h6>

                <a href="tel:+012 345 6789" className="contact-links">
                  +012 345 6789
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <p className="errors-indicators">{errors.name}</p>
                    <input
                      type="text"
                      name="name"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                      ref={nameRef}
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="col-sm-6">
                    <p className="errors-indicators">{errors.email}</p>
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                      ref={emailRef}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="col-sm-12">
                    <p className="errors-indicators">{errors.subject}</p>
                    <input
                      type="text"
                      name="subject"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Subject"
                      style={{ height: "55px" }}
                      ref={subjectRef}
                      value={values.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="col-sm-12">
                    <p className="errors-indicators">{errors.message}</p>
                    <textarea
                      className="form-control bg-light border-0 px-4 py-3"
                      rows="4"
                      placeholder="Message"
                      ref={messageRef}
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                  </div>
                  <div className="col-sm-12">
                    <button
                      className="btn btn-primary border-inner w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
