import React from 'react';
import "./Services.css";
import sections from "../../constants/data";
import SingleService from './SingleService';

const Services = () => {
  return (
    <section className='services section-p bg-black' id = "services">
        <div className='container'>
            <div className='services-content'>
              
                <div className='section-t text-center'>
                    <h3>Facilities</h3>
                    <p className='text'>a Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias voluptatum, tempore dignissimos perferendis ea.</p>
                </div>
                <div className='item-list grid text-white text-center'>
                    {
                        sections.services.map(service => {
                            return (
                                <SingleService service = {service} key = {service.id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services