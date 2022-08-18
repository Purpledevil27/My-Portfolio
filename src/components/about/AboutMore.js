import Card from "react-bootstrap/Card"
import { MdPerson } from "react-icons/md"
import Button from 'react-bootstrap/Button'

const AboutMore = () => {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <h3><MdPerson style={{ marginBottom: "8px" }} /> Hobbies & Interests</h3>
                    <p style={{ textAlign: "justify" }}>
                        Apart from coding, some other activities that I like to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <strong className="purple">Hitting gym</strong> 🏋️‍♀️ <i>'Health is Wealth'</i>
                        </li>
                        <li className="about-activity">
                            <strong className="purple">Listening songs</strong> 🎶 <i>'Keeps me Calm'</i>
                        </li>
                        <li className="about-activity">
                            <strong className="purple">Travelling</strong> 🛫 <i>'Let's go out'</i>
                        </li>
                    </ul>

                    <p style={{ textAlign: "justify" }}>
                        I also do photoshop & illustrator work in <strong className="purple">Adode Photoshop</strong> & <strong className="purple">Adobe Illustrator</strong> (and I am not so good at it)
                        If you want to know how bad. Click on the button.
                    </p>
                    <Button href="#">Right Here!</Button>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default AboutMore