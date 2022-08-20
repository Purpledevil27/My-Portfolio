import { useState } from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser, } from "react-icons/ai"
import { CgFileDocument } from "react-icons/cg"
import { MdMessage } from "react-icons/md"

const Navbar1 = () => {
    const [expand, setExpand] = useState(false)
    const [navColor, setNavbar] = useState(false)

    const scrollHandler = () => {
        if (window.scrollY >= 20) {
            setNavbar(true)
        }
        else {
            setExpand(false)
        }
    }

    window.addEventListener("scroll", scrollHandler)
    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColor ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/My-Portfolio" className="d-flex">
                    <Nav.Link as={Link} to="/My-Portfolio" onClick={() => setExpand(false)}>
                        <strong className="purple"><AiOutlineHome size={34} style={{ marginBottom: "8px" }} /></strong>
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        setExpand(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" style={{ textAlign: "center" }}>
                    <Nav className="ms-auto" defaultActiveKey="#home">

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/My-Portfolio/about"
                                onClick={() => setExpand(false)}
                            >
                                <AiOutlineUser style={{ marginBottom: "7px" }} /> About
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/My-Portfolio/project"
                                onClick={() => setExpand(false)}
                            >
                                <AiOutlineFundProjectionScreen
                                    style={{ marginBottom: "7px" }}
                                />{" "}
                                Projects
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/My-Portfolio/resume"
                                onClick={() => setExpand(false)}
                            >
                                <CgFileDocument style={{ marginBottom: "5px" }} /> Resume
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/My-Portfolio/contact"
                                onClick={() => setExpand(false)}
                            >
                                <MdMessage
                                    style={{ marginBottom: "4px" }}
                                />{" "}
                                Contact
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbar1