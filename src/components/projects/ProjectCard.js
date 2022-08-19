
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { BsGithub } from "react-icons/bs"

const ProjectCard = (props) => {
    return (
        <Card className="project-card-view" style={{ textAlign: "center" }} >
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                <Button variant="primary" href={props.ghLink} target="_blank">
                    <BsGithub style={{ marginBottom: "3px" }} /> &nbsp;
                    {"GitHub"}
                </Button>
            </Card.Body>
        </Card >
    )
}

export default ProjectCard