import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCard"
import Particle from "../Particle"
import Weatherapp from "../../assets/images/project-images/Weather-app1.png"
import tasklistls from "../../assets/images/project-images/Task-List-LS1.png"
import qrcode from "../../assets/images/project-images/qrcode1.png"
import pingpong from "../../assets/images/project-images/Pingpong1.png"
import netflix from "../../assets/images/project-images/NetflixClone1.png"
import simon from "../../assets/images/project-images/SimonGame1.png"
import diary from "../../assets/images/project-images/Diary-entry1.png"
import secret from "../../assets/images/project-images/Secret1.png"
import movie from "../../assets/images/project-images/Movie-app1.png"

const Project = () => {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading" style={{ textAlign: "center" }}>
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white", textAlign: "center" }}>
                    Here are a few major & mini projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={secret}
                            title="IITP Confession Page"
                            description="Everyone has a story to tell. This is a web application where you can submit your secret without revealing your identity. Google & Facebook login & cookies & sessions provided with OAuth 2.0 authentication and passport.js. Used MongoDB atlas for database and deployed on heroku app. Technical skills used are NodeJS, ExpressJS, EJS, MongoDB & Mongoose."
                            ghLink="https://github.com/Purpledevil27/Secrets"
                            demoLink="https://rocky-plateau-17810.herokuapp.com/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={diary}
                            title="Daily Diary"
                            description="Diaries are great ways to reduce stress. This is an app that is designed to make your own personal journal of daily events, secrets, feelings, experiences, thoughts, appointments. Technical skills are used NodeJS, ExpressJS, EJS, lodash, MongoDB & Mongoose."
                            ghLink="https://github.com/Purpledevil27/Diary-Entry"
                            demoLink=""
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Weatherapp}
                            title="Weather-App"
                            description="(Work in progress) Check weather condition either by giving location access or entering the city name. Using asynchronous function by fetching data from openweathermap.com API using fetch, useEffect & useState of ReactJS. Also features like background image changes with time and weather condition."
                            ghLink="https://github.com/Purpledevil27/weather-app"
                            demoLink="https://purpledevil27.github.io/weather-app/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={tasklistls}
                            title="Task List LocalStorage"
                            description="Task list made with javascript window localstorage object in which data are stored for future sessions. Add a new task, remove it, filter a task from the list. Technical skills used are HTML, MaterializeCSS & Javascript."
                            ghLink="https://github.com/Purpledevil27/Task-List-Localstorage"
                            demoLink="https://purpledevil27.github.io/Task-List-Localstorage/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={qrcode}
                            title="QR Code Generator"
                            description="Web application that takes input and generates QR Code for the same, comes in different sizes and have a save image feature so that you can use it anywhere. Technical skills used are ReactJS, tsparticles & TailwindCSS."
                            ghLink="https://github.com/Purpledevil27/QR-codeGenerator"
                            demoLink="https://purpledevil27.github.io/QR-codeGenerator/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={movie}
                            title="Movie Track"
                            description="Movie track is a web application where you can favorite your movies, add, remove and wishlist it. It uses omdb API to fetch data of the movie searched. Technical skills used are CSS, React & React-redux."
                            ghLink="https://github.com/Purpledevil27/movie-track"
                            demoLink=""
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={pingpong}
                            title="Ping Pong Game"
                            description="Ping Pong Game made HTML, CSS and Javascript. Have two bars and a ball, if the ball touches the bottom or top screen, game is over. Available only on desktop."
                            ghLink="https://github.com/Purpledevil27/Ping-Pong-Game"
                            demoLink="https://purpledevil27.github.io/Ping-Pong-Game/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={netflix}
                            title="Netflix Clone"
                            description="Netlix Clone website made with HTML & CSS."
                            ghLink="https://rocky-plateau-netflix-clone.netlify.app/"
                            demoLink="https://purpledevil27.github.io/Netflix-Clone/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={simon}
                            title="Simon Game"
                            description="Simon game is an electronic game of short-term memory skill. It creates a series of tones and lights and requires a user to repeat the sequence. Available only on desktop. Technical Skills used are HTML, CSS & Javascript"
                            ghLink="https://github.com/Purpledevil27/Simon-game"
                            demoLink="https://purpledevil27.github.io/Simon-game/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Project