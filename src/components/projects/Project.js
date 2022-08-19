import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCard"
import Particle from "../Particle"

const Project = () => {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading" style={{ textAlign: "center" }}>
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white", textAlign: "center" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            title="Social Media App"
                            description="Chat with your friends and family. Post, like and commnet on others post. Technical skills used are ReactJS, firebase, socket.io."
                            ghLink="#"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="Blog Post"
                            description="Blog Post with user login having authentication and security where you can share your experiences with others. Technical skills used are nodejs, expressjs, passport."
                            ghLink="#"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            title="Task Tracker Using ReactJS"
                            description="Keep your tasks organised and keep your reminded. Technical skills used are Reactjs, Firebase."
                            ghLink="#"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Project