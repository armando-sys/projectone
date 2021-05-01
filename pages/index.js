import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import AtomText from "../components/atoms/paragraph";
import AtomButton from "../components/atoms/button";

export default function test() {
  return (
    <>

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

      <div className="container mt-4">
        <div className="templateBox row">

          <div className="col-6 text-left">
            <AtomText
              value="Next.JS Framework"
              fontFamily="Roboto"
              size="20px"
              padding="10px"
              margin="0 0 0 0"
            />

            <AtomText
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique nisl vel tellus fringilla, id hendrerit ipsum faucibus. Sed id nunc id risus rutrum dignissim ac sed purus. Nunc vestibulum mauris eleifend luctus tincidunt. Etiam velit leo, vehicula non massa eget, laoreet auctor neque. Suspendisse accumsan sed nisl ac congue. Duis a neque venenatis, ultrices quam eu, tincidunt eros. Proin imperdiet tincidunt nisl ut posuere. Etiam mattis pharetra mauris, eu tempor sem elementum vel. Proin ac dolor efficitur, varius lorem in, porttitor nunc."
              fontFamily="Roboto"
              size="12px"
              align="justify"
              padding="10px"
              margin="0px"
            />
          </div>
          <div className="col-6 text-left">
            <AtomText
              value="Framework Laravel"
              fontFamily="Roboto"
              size="20px"
              padding="10px"
              margin="0 0 0 0"
            />

            <AtomText
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique nisl vel tellus fringilla, id hendrerit ipsum faucibus. Sed id nunc id risus rutrum dignissim ac sed purus. Nunc vestibulum mauris eleifend luctus tincidunt. Etiam velit leo, vehicula non massa eget, laoreet auctor neque. Suspendisse accumsan sed nisl ac congue. Duis a neque venenatis, ultrices quam eu, tincidunt eros. Proin imperdiet tincidunt nisl ut posuere. Etiam mattis pharetra mauris, eu tempor sem elementum vel. Proin ac dolor efficitur, varius lorem in, porttitor nunc."
              fontFamily="Roboto"
              size="12px"
              align="justify"
              padding="10px"
              margin="0px"
            />
          </div>
          <div className="col-12">
            <AtomText value="Patrick Armando"
              size="24px"
              variant="small-caps"
              family="Arial, Helvetica, sans-serif"
              weight="700"
              padding="10px"
              margin="-10px 0 0 0"

            />
            <AtomText value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla sem tortor, ut gravida velit efficitur in. Phasellus finibus, turpis eu suscipit varius, quam erat suscipit sapien, eget ultricies mi nunc id nunc. 
                        Quisque varius eu turpis vel egestas. Pellentesque placerat purus felis, id ornare tortor vestibulum ut. Ut aliquam bibendum volutpat. In accumsan dictum pellentesque. 
                        Cras ultrices scelerisque nibh vel rhoncus. Etiam nec magna vitae felis hendrerit porttitor ut pretium orci. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla sem tortor, ut gravida velit efficitur in. 
                        Phasellus finibus, turpis eu suscipit varius, quam erat suscipit sapien, eget ultricies mi nunc id nunc. 
                        Quisque varius eu turpis vel egestas. Pellentesque placerat purus felis, id ornare tortor vestibulum ut. 
                        Ut aliquam bibendum volutpat. In accumsan dictum pellentesque. Cras ultrices scelerisque nibh vel rhoncus. 
                        Etiam nec magna vitae felis hendrerit porttitor ut pretium orci."
              size="12px"
              padding="0px"
              align="justify"
              margin="0px"
              padding="10px 10px 10px 10px"
              shadow="0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.15)"
              fontFamily="Roboto"

            />
            <AtomButton value="Read More"
              background="blue"
              border="1px solid"
              padding="10px 20px"
              margin="10px 0 20px 10px"
              color="white"
              radius="10px"
              float="right"
              variant="outline-light"


            />
            <AtomButton
              value="Learn More"
              background="Green"
              border="none"
              padding="10px 20px"
              margin="10px 0 20px 20px"
              color="white"
              radius="10px"
              float="right"
            />

          </div>
        </div>
      </div>
    </>
  )
}