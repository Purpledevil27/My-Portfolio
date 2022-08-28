import { Container, Row, Col } from "react-bootstrap"
import Particle from "../Particle"
import Education from "./Education"
import AboutMore from "./AboutMore"
import Skills from "./Skills"
import Tools from "./Tools"
import Github from "./Github"

const About = () => {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "5px", textAlign: "center" }}>My name is
                    <strong className="purple"> Rahul Kumar.</strong>
                </h1>
                <h5 style={{ textAlign: "center" }}> I am from<strong className="purple"> Muzaffarpur, Bihar </strong> and currently a Final Year Undergrad Student at <strong className="purple">IIT Patna.</strong></h5>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <Education />
                    </Col>
                    <Col
                        md={5}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <AboutMore />
                    </Col>
                </Row>
                <br />
                <h1 className="about-heading" style={{ textAlign: "center" }}>
                    Professional <strong className="purple">Skillset </strong>
                </h1>

                <Skills />
                <br />
                <br />
                <h1 className="about-heading" style={{ textAlign: "center" }}>
                    <strong className="purple">Tools</strong> I use
                </h1>

                <Tools />
                <br />
                <br />
                <Github />
            </Container >
        </Container >
    )
}
export default About