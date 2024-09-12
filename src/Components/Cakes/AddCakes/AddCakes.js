import React from 'react'
import Select from 'react-select';
import { useState } from 'react';
export default function AddCakes() {

    const [selectedOption, setSelectedOption] = useState(null);


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

  return (
    
    <div className='addCake-form'>
      <h2>Add a Cake: </h2>
      <input type="text" name="cakeName" placeholder='Cake Name...'/>
      <br/>
      <br/>
      <input type="number" name="price" placeholder='Price...'/>
      <br/>
      <br/>
      <input type="text" name="flavor" placeholder='Flavor...'/>
      <br/>
      <br/>
      <textarea name="description" placeholder='Description...'/>
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
      <input type="file"/>
      <br/>
      <br/>
      <button className='btn btn-primary'>Add a Cake</button>
    </div>
   
  )
}
