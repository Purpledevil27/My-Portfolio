import { Container, Row, Col } from "react-bootstrap";
import TypeWriter from "./Typewriter"
import mypic from '../../assets/images/pass.jpg'
import Section from "./Section"
import Particle from '../Particle'

const Home = () => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={6} className="home-header">
                            <h1 style={{ paddingBottom: 15, marginTop: "25" }} className="heading">
                                Hi There!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> RAHUL KUMAR</strong>
                            </h1>

                            <div style={{
                                paddingBottom: 50
                            }}>
                                <TypeWriter />
                            </div>
                        </Col>

                        <Col md={6} style={{ paddingTop: 30, paddingBottom: 20, textAlign: "center" }}>
                            <img
                                src={mypic}
                                alt="My Profile"
                                className="img-fluid"
                                style={{ maxHeight: "375px", borderRadius: "50%" }} />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Section />
        </section>
    )
}

export default Home