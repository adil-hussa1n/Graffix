import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

export const Skills = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Build responsive and dynamic websites that scale with your business.',
      icon: faCode,
      color: 'text-blue-500',
    },
    {
      title: 'Graphic Design',
      description: 'Create visually stunning designs for print and digital media.',
      icon: faPalette,
      color: 'text-green-500',
    },
    {
      title: 'UI/UX Design',
      description: 'Design intuitive, user-friendly interfaces for all platforms.',
      icon: faLaptopCode,
      color: 'text-red-500',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="services py-20 bg-black text-white relative rounded-lg overflow-hidden" id="service">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-6xl font-extrabold text-yellow-400 mb-12 mt-16">Our Services</h2>
        <p className="text-2xl mb-16 text-gray-300">We offer a wide range of services to help your business succeed.</p>

        {/* Carousel */}
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="p-8">
              {/* Add margin to create gap between the cards */}
              <div className="service-card flex flex-col items-center p-10 rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105 hover:rotate-1 mx-4">
                <div className="icon-container mb-8">
                  <FontAwesomeIcon icon={service.icon} size="3x" className={`${service.color}`} />
                </div>
                <h5 className="text-3xl font-bold mb-6">{service.title}</h5>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
