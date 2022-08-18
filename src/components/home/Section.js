import { Container, Row, Col } from "react-bootstrap"

const Section = () => {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I love programming and I love everything about it. I spent most of the time in front of my computer screen as I am Coding, Debugging or geeking out my friends about contests & coding methods.
                            <br />
                            <br />I do <b className="purple"> Competitive programming </b> and <b className="purple"> Web development. </b>
                            <br />
                            <br />
                            I have experience in
                            <b className="purple"> C++, Javascript language, NodeJS,</b> Databases like <b className="purple"> MySQL, MongoDB, </b> Frameworks like <b className="purple">
                                ExpressJS, Mongoose, Bootstrap,
                            </b> Libraries like <b className="purple">
                                JQuery, ReactJS
                            </b> and Tools like <b className="purple"> Git.</b>
                            <br />
                            <br />
                            I strive to learn more daily and help this community for a better future. Hoping to meet you.😃
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Section