import Card from "react-bootstrap/Card"
import { FaAngleDoubleRight } from 'react-icons/fa'
import { MdOutlineSchool } from 'react-icons/md'

const Education = () => {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote 0">
                    <h3><MdOutlineSchool style={{ marginBottom: "8px" }} /> Education</h3>
                    <ul>
                        <li className="about-activity">
                            <h6 style={{ color: "	#CBC3E3" }}><FaAngleDoubleRight style={{ marginBottom: "5px" }} />July 2019 - June 2023</h6>
                            <h4><strong className='purple'>Indian Institute of Technology </strong>Patna, India</h4>
                            <h5>Bachelor of Technology, Civil Engineering, GPA-8.24</h5>
                        </li>
                        <br />
                        <li className="about-activity">
                            <h6><FaAngleDoubleRight style={{ marginBottom: "5px" }} />May 2017 - April 2019</h6>
                            <h4><strong className='purple'>Narayana Academy </strong>Hyderabad, India</h4>
                            <h5>Senior Secondary High School, PCM, Percentage-96.4%</h5>
                        </li>
                        <br />
                        <li className="about-activity">
                            <h6><FaAngleDoubleRight style={{ marginBottom: "5px" }} />May 2015 - March 2017</h6>
                            <h4><strong className='purple'>Dav Public School </strong>Muzaffarpur, India</h4>
                            <h5>High School, CGPA-10</h5>
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default Education