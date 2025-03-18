import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./Services.css";
import theme from "../../assets/shape1.png";
import services_data from "../../assets/services_data";

const Services = () => {
  return (
    <div id="services" className="services">
      {/* Title Section */}
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme} alt="Decorative Theme" />
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
        effect="coverflow"
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        coverflowEffect={{
          rotate: 30, // Rotation effect
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="services-swiper"
      >
        {services_data.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <ArrowRight size={30} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
