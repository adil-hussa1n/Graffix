import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutUs.css';
import pic1 from '../assets/img/GRAFFIX-1.jpg';  // Add your images here
import pic2 from '../assets/img/GRAFFIX-2.jpg';
import pic3 from '../assets/img/GRAFFIX-3.1.jpg';

export const About = () => {
  return (
    <section className="about-us py-5" id="about" style={{ backgroundColor: '#000', color: '#fff' }}>
      <Container>
        {/* Heading */}
        <Row>
          <Col md={12} className="text-center mb-4">
            <h2 className="section-heading">About Us</h2>
            <p className="lead mb-5">
              At [Your IT Company], we strive to deliver cutting-edge technology solutions to help your business grow and succeed in the digital world. 
              Our dedicated team of experts works hard to provide top-notch services, from software development to digital transformation strategies.
            </p>
          </Col>
        </Row>

        {/* Cards Section */}
        <Row className="mb-4 align-items-center">
          {/* 1st Card */}
          <Col md={4} className="mb-4">
            <img src={pic3} alt="Our Team" className="img-fluid rounded shadow-lg" />
          </Col>
          <Col md={6}>
            <h3 className="text-uppercase">Innovative IT Solutions</h3>
            <p className="text-muted">
              We specialize in providing innovative IT solutions tailored to your unique business needs. Whether it’s building a custom software solution, 
              managing your IT infrastructure, or helping you integrate cutting-edge technologies, we are here to support your growth.
            </p>
          </Col>
        </Row>
        <hr className="custom-divider" /> {/* Divider */}

        <Row className="mb-4 align-items-center">
          {/* 2nd Card */}
          <Col md={4} className="order-md-2 mb-4 ms-auto">
            <img src={pic1} alt="Our Services" className="img-fluid rounded shadow-lg" />
          </Col>
          <Col md={6} className="order-md-1">
            <h3 className="text-uppercase">Our Expertise</h3>
            <p className="text-muted">
              With a team of experienced professionals, we offer expertise across multiple domains, including web development, cloud computing, cybersecurity, 
              and more. Our goal is to leverage technology to create solutions that streamline operations and drive business value.
            </p>
          </Col>
        </Row>
        <hr className="custom-divider" /> {/* Divider */}

        <Row className="mb-4 align-items-center">
          {/* 3rd Card */}
          <Col md={4} className="mb-4">
            <img src={pic2} alt="Our Vision" className="img-fluid rounded shadow-lg" />
          </Col>
          <Col md={6}>
            <h3 className="text-uppercase">Your Future, Our Commitment</h3>
            <p className="text-muted">
              Our commitment to innovation and excellence ensures that we provide not only the solutions you need today but also the insights and strategies 
              to help you prepare for tomorrow’s challenges. Let us partner with you on your journey to digital transformation.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
