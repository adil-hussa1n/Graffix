import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/rocket-01.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimeout = setTimeout(tick, isDeleting ? 100 : 200);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to Graffix</span>
                  <h2 className="h2-typing">
                    {`Hey! We're Team Graffix `}
                    <br />
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>
                  <p>
                    Graffix Innovation specializes in website development, Android applications, UX/UI design, and digital marketing.
                  </p>
                  <div className="button-container"> {/* Added a div for better button control */}
                    <button onClick={() => {
                      const anchor = document.querySelector("#contact");
                      if (anchor) anchor.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="d-flex justify-content-end">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""} style={{ width: "90%" }}>
                  <img src={headerImg} alt="Header Img" className="header-img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
