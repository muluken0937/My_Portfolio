import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Services.css';
import theme from '../../assets/shape1.png';
import services_data from '../../assets/services_data';

const Services = () => {
  return (
    <div id='services' className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme} alt="" />
      </div>
      <div className="services-container">
        {services_data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <ArrowRight size={30} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
