import React, { useEffect, useState } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/images/kachi2.jpg";
import { Container, Col, Row } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import '../../src/App.css';
 
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Quality Assurance (QA) Engineer"];
  const [text, setText] = useState("");
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, [delta]);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Kachi`}{" "}
                    <span
                      className="txt-rotate"
                      datap-period="1000"
                      data-rotate='["Web Developer", "Quality Assurance (QA) Engineer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <p>
                    With a passion for crafting high-quality, scalable web
                    applications. With a strong foundation in both frontend and
                    backend technologies, I excel at building seamless user
                    experiences and robust server-side solutions. <br />
                    <br /> My dual expertise in development and quality
                    assurance ensures that I deliver not only functional but
                    also reliable and efficient software. Driven by a commitment
                    to excellence, I leverage my diverse skill set to tackle
                    complex challenges and enhance the performance and usability
                    of every project I undertake.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src={HeaderImg}
                    alt="Header Img"
                    style={{
                      width: "80%", // Reduces the image size to 80% of its container
                      borderRadius: "20%", // Applies 20% border-radius
                    }}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Banner;
