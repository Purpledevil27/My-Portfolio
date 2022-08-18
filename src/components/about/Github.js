import GitHubCalendar from "react-github-calendar"
import { Row } from "react-bootstrap"

const Github = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 className="about-heading" style={{ paddingBottom: "20px", textAlign: "center" }}>
                Days I <strong className="purple">Code</strong>
            </h1>
            <GitHubCalendar
                username="Purpledevil27"
                blockSize={15}
                blockMargin={5}
                color="#c084f5"
                fontSize={16}
            />
        </Row>
    )
}

export default Github