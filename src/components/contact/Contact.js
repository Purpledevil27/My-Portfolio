import { Container, Row, Col } from 'react-bootstrap'
import Particle from '../Particle'
import Map from './Map'
import ContactForm from './ContactForm'
import { AiFillGithub, AiFillInstagram } from "react-icons/ai"
import { FaLinkedinIn, FaFacebookSquare } from "react-icons/fa"

const Contact = () => {
    return (
        <Container fluid className="contact-section">
            <Container >
                <h1 className="contact-heading" style={{ textAlign: "center" }}>
                    My <strong className="purple">Contact </strong>details
                </h1>
                <Row style={{ justifyContent: 'center' }}>
                    <Col md={4} className="contact-about">
                        <h4><strong className='purple'>Address</strong></h4>
                        <h5>Indian Institute of Technology Patna</h5>
                    </Col>
                    <Col md={4} className="contact-about">
                        <h4><strong className='purple'>Mobile</strong></h4>
                        <h5>+91-8106251238</h5>
                    </Col>
                    <Col md={4} className="contact-about">
                        <h4><strong className='purple'>Email</strong></h4>
                        <h5>rkrahul2703@gmail.com</h5>
                    </Col>
                </Row>
                <Row style={{ paddingTop: '30px' }}>
                    <Col md={6} className="contact-about">
                        <Map />
                    </Col>
                    <Col md={1} ></Col>
                    <Col md={5} className="contact-form-about">
                        <ContactForm />
                    </Col>
                </Row>
                <Row >
                    <Col md={12} className="contact-about">
                        <h1>FIND ME ON</h1>
                        <ul className="contact-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/Purpledevil27"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  contact-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/rahulkumar2703/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  contact-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/purple.devil07/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  contact-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.facebook.com/profile.php?id=100004258517528"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour contact-social-icons"
                                >
                                    <FaFacebookSquare />
                                </a>
                            </li>
                        </ul>
                        <p style={{ paddingTop: "20px" }}>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                    </Col>
                </Row>
            </Container>
            <Particle />
        </Container>
    )
}

export default Contact