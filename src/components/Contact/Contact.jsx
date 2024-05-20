import React from 'react';
import "./Contact.css";
// import images from '../../constants/images';
// import { Formik } from 'formik';
import Info from './Info';
import Map from './Map';

const Contact = () => {
  return (
    <section className='contact section-p-top bg-black' id = "contact">
        <Map />
        <Info />
    </section>
  )
}

export default Contact
