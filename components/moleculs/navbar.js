import { Navbar, Nav, Form } from 'react-bootstrap';
export default function navbar() {
    return (<>
        <Navbar bg="primary" variant="light">
            <Navbar.Brand href="#home">
                <img src="/homepage/nav_logo.png"
                    style={{
                        width: "50px",
                        margin: "0 0 0 100px",
                        filter: "drop-shadow(1px 1px 1px #666666)",
                    }} />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link className="text-light" href="#home">Trend</Nav.Link>
                <Nav.Link className="text-light" href="#features">Explore</Nav.Link>
                <Nav.Link className="text-light" href="#pricing">Collection</Nav.Link>
                <Nav.Link className="text-light" href="#pricing">About Us</Nav.Link>
            </Nav>
            <Form inline>
                <img src="/homepage/cart.png" style={{ marginRight: "30px" }} />
                <img src="/homepage/user.png" style={{ marginRight: "100px" }} />
            </Form>
        </Navbar>

    </>)
}