import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { PackageCard } from "./PackageCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Projects.css'; 

export const Projects = () => {
  const packages = [
    // Web Solutions packages
    {
      title: "Basic",
      price: "Starting from $99",
      features: [""],
    },
    {
      title: "Advanced",
      price: "Starting from $349",
      features: [""],
    },
    {
      title: "Premium",
      price: "Starting from $999",
      features: [""],
    },

    // Design Packages
    {
      title: "Basic",
      price: "$99",
      features: [
        "✅ 2 Logo Design Concepts",
        "❌ PowerPoint Presentation Theme",
        "❌ Social media cover pages design",
        "❌ Slogans and taglines",
        "✅ 1 Flyer Designs",
        "✅ Business Card Design",
        "✅ Letterhead Design",
        "✅ Envelope Design",
        "❌ Book cover/Writing Pad/Dairy",
        "❌ T-shirts/Caps",
        "❌ Mug/Bottle Design",
        "❌ Product label",
        "❌ Stationery Design",
        "❌ Brochure Design",
        "✅ Full copyright ownership",
        "✅ Delivery Timeline 1 Weeks"
      ],
    },
    {
      title: "Advanced",
      price: "$199",
      features: [
        "✅ 3 Logo Design Concepts",
        "✅ PowerPoint Presentation Theme",
        "✅ Social media cover pages design",
        "✅ Slogans and taglines",
        "✅ 2 Flyer Designs",
        "✅ Business Card Design",
        "✅ Letterhead Design",
        "✅ Envelope Design",
        "✅ Book cover/Writing Pad/Dairy",
        "❌ T-shirts/Caps",
        "❌ Mug/Bottle Design",
        "✅ Product label",
        "✅ Stationery Design",
        "✅ Brochure Design",
        "✅ Full copyright ownership",
        "✅ Delivery Timeline 2 Weeks"
      ],
    },
    {
      title: "Premium",
      price: "$249",
      features: [
        "✅ 5 Logo Design Concepts",
        "✅ PowerPoint Presentation Theme",
        "✅ Social media cover pages design",
        "✅ Slogans and taglines",
        "✅ 3 Flyer Designs",
        "✅ Business Card Design",
        "✅ Letterhead Design",
        "✅ Envelope Design",
        "✅ Book cover/Writing Pad/Dairy",
        "✅ T-shirts/Caps",
        "✅ Mug/Bottle Design",
        "✅ Product label",
        "✅ Stationery Design",
        "✅ Brochure Design",
        "✅ Full copyright ownership",
        "✅ Delivery Timeline 3-4 Weeks"
      ],
    },

    // Marketing Strategies
    {
      title: "Based on Client Demand",
      description: "Our team of experts will help you achieve your goals.",
      price: "$ Negotiable Price",
      features: [""],
    },
  ];

  return (
    <section className="packages py-5" id="package" style={{ background: 'black' }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-center mb-4">Our Packages</h2>
                  <p className="text-center text-light mb-5">Choose from our range of services designed to suit your business needs.</p>
                  <Tab.Container id="packages-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="justify-content-center mb-5">
                      <Nav.Item>
                        <Nav.Link eventKey="first" className="custom-tab">Web Solutions</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" className="custom-tab">Design Packages</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" className="custom-tab">Marketing Strategies</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-center">
                          {packages.slice(0, 3).map((pkg, index) => (
                            <Col md={6} lg={4} key={index} className="mb-4">
                              <PackageCard {...pkg} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="justify-content-center">
                          {packages.slice(3, 6).map((pkg, index) => (
                            <Col md={6} lg={4} key={index} className="mb-4">
                              <PackageCard {...pkg} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="justify-content-center">
                          {packages.slice(6, 9).map((pkg, index) => (
                            <Col md={6} lg={4} key={index} className="mb-4">
                              <PackageCard {...pkg} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};