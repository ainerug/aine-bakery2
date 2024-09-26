import React from 'react'
import { Link } from 'react-router-dom';


export default function Header(props) {

    
  return (
    <div>
       <div className="container-fluid bg-dark bg-img p-5 mb-5">
        <div className="row">
            <div className="col-12 text-center">
                <h1 className="display-4 text-uppercase text-white">{props.headerName}</h1>
                <Link to="/">Home</Link>
                <i className="far fa-square text-primary px-2"></i>
                <Link to= "">{props.headerName}</Link>
            </div>
        </div>
    </div>
    </div>
  )
  }
