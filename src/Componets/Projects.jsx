import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/images/Bookly.jpg";
import projImg2 from "../assets/images/Budget.jpg";
import projImg3 from "../assets/images/port.jpg";
import colorSharp2 from "../assets/images/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "BOOKLY",
      description: "An e-commerce store",
      imgUrl: projImg1,
      githubLink: "https://github.com/okemirio/Bookkapp-Backend",
      projectUrl: "https://bookstore-alpha-silk.vercel.app/",
      category: "ecommerce",
    },
    {
      title: "A BUDGET APP",
      description: "A budget and expense calculator",
      imgUrl: projImg2,
      githubLink: "https://github.com/okemirio/BudgetApp",
      projectUrl: "https://budget-app-zeta-orpin.vercel.app/",
      category: "budget",
    },
    {
      title: "My Portfolio",
      description: "Personal portfolio showcasing my work",
      imgUrl: projImg3,
      githubLink: "https://github.com/your-username/portfolio-repo",
      projectUrl: "https://your-portfolio-url.com",
      category: "portfolio",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore my latest projects, including an e-commerce store, a budget app, and my personal portfolio.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="ecommerce">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      <Nav.Item>
                        <Nav.Link eventKey="ecommerce">E-commerce</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="budget">Budget App</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {["ecommerce", "budget", "portfolio"].map((category, idx) => (
                        <Tab.Pane eventKey={category} key={idx}>
                          <Row>
                            {projects
                              .filter((project) => project.category === category)
                              .map((project, index) => (
                                <ProjectCard
                                  key={index}
                                  title={project.title}
                                  description={project.description}
                                  imgUrl={project.imgUrl}
                                  githubLink={project.githubLink}
                                  projectUrl={project.projectUrl}
                                />
                              ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};

export default Projects;
