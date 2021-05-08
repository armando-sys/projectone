import 'bootstrap/dist/css/bootstrap.min.css';
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
                <Nav.Link className="text-light" href="/">Home</Nav.Link>
                <Nav.Link className="text-light" href="/detail">Detail</Nav.Link>
                <Nav.Link className="text-light" href="/billing">Billing</Nav.Link>
                <Nav.Link className="text-light" href="/about">About Us</Nav.Link>
            </Nav>
            <Form inline>
                <img src="/homepage/cart.png" style={{ marginRight: "30px" }} />
                <img src="/homepage/user.png" style={{ marginRight: "100px" }} />
            </Form>
        </Navbar>

    </>)
}