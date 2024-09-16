import React, { useRef } from 'react'
import Select from 'react-select';
import { useState } from 'react';
import axios from 'axios';
import { Formik, useFormik } from 'formik';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { cakeSchema } from '../../../Validation/AddCakeValidation';
export default function AddCakes() {

    const [selectedOption, setSelectedOption] = useState(null);
    const [image, setImage] = useState("");


    const cakeNameRef = useRef();
    const priceRef = useRef();
    const flavorRef = useRef();
    const descriptionRef = useRef();



    const options = [
        { value: 'birthday', label: 'Birthday' },
        { value: 'wedding', label: 'Wedding' },
        { value: 'custom', label: 'Custom' },
      ];

      const customStyles = {
        control: (provided) => ({
          ...provided,
          backgroundColor: '#FFF'
        }),
        menu: (provided) => ({
          ...provided,
          backgroundColor: '#FFF'
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? '#F0AF6A' : '#FFF',
          '&:hover': {
            backgroundColor: '#F0AF6A', 
          },
        }),
      };



      function readFile(e) {
        let files = e.target.files;
        for (let i = 0; i < files.length; i++) {
          (function (file) {
            var reader = new FileReader();
            reader.onload = () => {
                console.log(reader.result);
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
          })(files[i]);
        }
      }

      const uploadCake = () =>{

        const payload = {

          cakeName: cakeNameRef.current.value,
          price : priceRef.current.value,
          image: image,
          description: descriptionRef.current.value,
          flavor: flavorRef.current.value,
          category: selectedOption.value,
        }
        axios.post("http://localhost:8080/cakes", payload).then((res)=>{
          console.log(res)
          NotificationManager.success("Cake has been uploaded successfully!");

        }).catch((e)=>{
          console.log(e);
          NotificationManager.error("Something went wrong!")

        })
      }

      const initialValues = {

        cakeName: "",
        price: null,
        flavor: "",
        description: "",
        file: "",

      }

      const {values, errors, handleSubmit, handleChange, handleBlur} = useFormik({

        initialValues: initialValues,
        validationSchema: cakeSchema,
        onSubmit: ()=>{
          uploadCake();
        }
      })

      
      


  return (
    
    <div className='addCake-form'>
      <NotificationContainer/>
      <h2>Add a Cake: </h2>
      <form onSubmit={handleSubmit}>
        <p className='errors'>{errors.cakeName}</p>
      <input type="text" name="cakeName" placeholder='Cake Name...' value={values.cakeName} onChange={handleChange} onBlur={handleBlur} ref={cakeNameRef}/>
      <br/>
      <br/>
      <p className='errors'>{errors.price}</p>
      <input type="number" name="price" placeholder='Price...' ref={priceRef} value={values.price} onChange={handleChange} onBlur={handleBlur}/>
      <br/>
      <br/>
      <p className='errors'>{errors.flavor}</p>
      <input type="text" name="flavor" placeholder='Flavor...' ref={flavorRef} value={values.flavor} onChange={handleChange} onBlur={handleBlur}/>
      <br/>
      <br/>
      <p className='errors'>{errors.description}</p>
      <textarea name="description" placeholder='Description...' ref={descriptionRef} value={values.description} onChange={handleChange} onBlur={handleBlur}/>
      <br/>
      <br/>
      <h3>Choose a Category: </h3>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        className='select-menu'
        styles={customStyles}
      />
      <br/>
      <br/>
      <p className='errors'>{errors.file}</p>
      <input type="file" name="file" onChange={(e)=>{
        readFile(e)
        handleChange(e)
        }} value={values.file} onBlur={handleBlur}/>
      
      <br/>
      <br/>
      {image!== "" && <img src={image}  alt="cake" width={300}/>}
      <br/>
      <br/>
      <button className='btn btn-primary' type="submit" >Add a Cake</button>
      </form>
    </div>
   
  )
}
