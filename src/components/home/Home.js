import { Container, Row, Col } from "react-bootstrap";
import TypeWriter from "./Typewriter"
import mypic from '../../assets/images/pass.jpg'
import Section from "./Section"


const Home = () => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hi There!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> RAHUL KUMAR</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <TypeWriter />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={mypic}
                                alt="My Profile"
                                className="img-fluid"
                                style={{ maxHeight: "450px", borderRadius: "50%" }} />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Section />
        </section>
    )
}

export default Home