import { Col, Row } from "react-bootstrap"
import { CgCPlusPlus } from "react-icons/cg"
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, } from "react-icons/di"
import { SiFirebase, SiExpress, SiJquery, SiBootstrap } from "react-icons/si"

const Skills = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <CgCPlusPlus /><h6>C++</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 /><h6>Javascript</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJquery /><h6>jQuery</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs /><h6>NodeJS</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiExpress /><h6>ExpressJS</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact /><h6>React</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb /><h6>MongoDB</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFirebase /><h6>Firebase</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiBootstrap /><h6>Bootstrap</h6>
            </Col>

        </Row>
    )
}

export default Skills