import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, liveLink, codeLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} style={{
          height: "20rem", resizeMode: "cover"
        }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h5><a href={liveLink} style={{ color: "white", textDecoration: "none", display: "inline" }}>Live Link</a></h5>
          <h5><a href={codeLink} style={{ color: "white", textDecoration: "none", display: "inline" }}>Code Link</a></h5>
        </div>
      </div>
    </Col>
  )
}
