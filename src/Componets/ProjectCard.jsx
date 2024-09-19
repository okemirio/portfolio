import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, githubLink, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={`${title} image`} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          {/* Add Project URL */}
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            Visit Project
          </a>
          <br />
          {/* Add GitHub link */}
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
            View on GitHub
          </a>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
