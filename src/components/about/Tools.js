import { Col, Row } from "react-bootstrap"
import { SiLinux, SiVisualstudiocode, SiHeroku, } from "react-icons/si"
import { DiGit } from "react-icons/di"
import { BsGithub } from "react-icons/bs"

const Tools = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit /><h6>Git</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLinux /><h6>Linux</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode /><h6>Visual Studio Code</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHeroku /><h6>Heroku</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <BsGithub /><h6>Github</h6>
            </Col>
        </Row>
    )
}

export default Tools