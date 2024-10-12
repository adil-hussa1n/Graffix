import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com';
import LottieAnimation from './LottieAnimation'; 
import './Contact.css'; 

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    
    emailjs.send(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      {
        firstName: formDetails.firstName,
        lastName: formDetails.lastName,
        email: formDetails.email,
        phone: formDetails.phone,
        message: formDetails.message
      },
      'YOUR_PUBLIC_KEY' 
    ).then((response) => {
      setButtonText("Send Message");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: 'Message sent successfully!' });
    }).catch((error) => {
      setButtonText("Send Message");
      setStatus({ success: false, message: 'Something went wrong. Please try again.' });
    });
  };

  return (
    <section className="contact" id="connect" style={{ backgroundColor: '#000', color: '#fff', padding: '50px 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <LottieAnimation />
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contact Us</h2>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="text" 
                          value={formDetails.firstName} 
                          placeholder="First Name" 
                          onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                          required
                          className="form-control"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="text" 
                          value={formDetails.lastName} 
                          placeholder="Last Name" 
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          required
                          className="form-control"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="email" 
                          value={formDetails.email} 
                          placeholder="Email Address" 
                          onChange={(e) => onFormUpdate('email', e.target.value)} 
                          required
                          className="form-control"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="tel" 
                          value={formDetails.phone} 
                          placeholder="Phone No." 
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                          required
                          className="form-control"
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea 
                          rows="6" 
                          value={formDetails.message} 
                          placeholder="Your Message" 
                          onChange={(e) => onFormUpdate('message', e.target.value)} 
                          required
                          className="form-control"
                        ></textarea>
                        <button type="submit" className="submit-btn"><span>{buttonText}</span></button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success ? "success" : "danger"}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
