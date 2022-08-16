import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <Container fluid className='footer'>
            <Row>
                <Col md='4' className='footer-copywright'>
                    <h3>Designed by Rahul Kumar</h3>
                </Col>
                <Col md='4' className='footer-copywright'>
                    <h3>Copyright &copy;{year}</h3>
                </Col>
                <Col md='4' className='footer-body'>
                    <ul className='footer-icons'>
                        <li className='social-icons'>
                            <a
                                href='https://github.com/Purpledevil27'
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href='https://www.linkedin.com/in/rahulkumar2703/'
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href='https://www.instagram.com/purple.devil07/'
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href='https://www.facebook.com/profile.php?id=100004258517528'
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebookSquare />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer