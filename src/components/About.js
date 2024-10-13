import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AboutUs.css';

export const About = () => {
  return (
    <section className="about-us py-5" id="about" style={{ backgroundColor: '#000000', color: '#fff' }}>
      <Container>
        {/* Heading */}
        <Row>
          <Col md={12} className="text-center mb-4">
            <h2 className="section-heading">About Us</h2>
            <p className="lead mb-4">
              At Graffix Innovation, we are passionate about transforming ideas into impactful visuals. With a focus on graphic design, branding, website development, and promotional strategies, we bring a holistic approach to help businesses stand out in today’s competitive landscape.
            </p>
            <h3 className="section-heading">Why Choose Us</h3>
          </Col>
        </Row>

        {/* Why Choose Us Section */}
        <Row className="g-4">
          {/* 1st Card */}
          <Col md={12} lg={6}>
            <Card className="custom-card mb-4">
              <Card.Body>
                <Card.Title className="text-uppercase fw-bold">Creative Expertise</Card.Title>
                <Card.Text>
                  Our team comprises seasoned professionals who thrive on creativity and innovation. We stay ahead of design trends to ensure your brand remains fresh and engaging.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* 2nd Card */}
          <Col md={12} lg={6}>
            <Card className="custom-card mb-4">
              <Card.Body>
                <Card.Title className="text-uppercase fw-bold">Customized Solutions</Card.Title>
                <Card.Text>
                  We understand that every client is unique. Our services are tailored to meet your specific needs, whether you're a startup looking to establish your identity or an established brand seeking a refresh.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* 3rd Card */}
          <Col md={12} lg={6}>
            <Card className="custom-card mb-4">
              <Card.Body>
                <Card.Title className="text-uppercase fw-bold">Collaborative Process</Card.Title>
                <Card.Text>
                  We believe in working closely with our clients throughout the project lifecycle. Your vision and feedback are integral to our process, ensuring the final product truly reflects your brand.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* 4th Card */}
          <Col md={12} lg={6}>
            <Card className="custom-card mb-4">
              <Card.Body>
                <Card.Title className="text-uppercase fw-bold">Comprehensive Services</Card.Title>
                <Card.Text>
                  From eye-catching graphic designs and memorable branding to functional websites and effective promotional campaigns, we offer a full suite of services to elevate your business.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* How We Help Clients Section */}
        <Row>
          <Col md={12} className="text-center mt-5">
            <h3 className="section-heading">How We Help Clients</h3>
            <p className="lead">
              At Graffix Innovation, our mission is to empower businesses through effective design and branding. We conduct thorough research and analysis to understand your target audience and market positioning. Our collaborative approach allows us to create innovative solutions that not only look great but also drive results.
            </p>
            <p className="lead">
              Whether you need a striking logo, a user-friendly website, or a strategic marketing plan, we are here to guide you every step of the way. Together, we can turn your vision into reality and achieve your business goals.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
