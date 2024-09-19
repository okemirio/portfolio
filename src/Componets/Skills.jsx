import meter1 from "../assets/images/js.png";
import meter2 from "../assets/images/react.png";
import meter3 from "../assets/images/node.png";
import meter4 from "../assets/images/bootstrap.png";
import meter5 from "../assets/images/tailwind.png";
import meter6 from "../assets/images/typescript.png";
import meter7 from "../assets/images/mongodb.png";
import meter8 from "../assets/images/html.png";
import meter9 from "../assets/images/CSS.png";
import meter10 from "../assets/images/mysql.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/images/arrow1.svg";
import arrow2 from "../assets/images/arrow2.svg";
import colorSharp from "../assets/images/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                As a dedicated full-stack developer, I possess a diverse skill
                set that spans both frontend and backend technologies. My
                expertise allows me to create seamless, high-performance web
                applications from start to finish. Whether it's designing
                intuitive user interfaces or developing robust server-side
                logic, I bring a comprehensive approach to every project. <br /> <br /> Here’s
                a detailed look at the technical skills that I leverage to build
                innovative solutions:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Node js</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Image" />
                  <h5>Tailwind css</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image" />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Image" />
                  <h5>Mongo DB</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="Image" />
                  <h5>Html5</h5>
                </div>
                <div className="item">
                  <img src={meter9} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter10} alt="Image" />
                  <h5>My SQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
export default Skills;
