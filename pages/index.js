import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import AtomText from "../components/atoms/paragraph";
import AtomButton from "../components/atoms/button";
import MoleculeProduct from "../components/moleculs/product_list";
import { list_product } from "../components/variables/list_product";

export default function test() {
  let products = list_product()
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
      <center>
        <div className="row container mt-5">
          <div className="col-md-6 text-left">
            <AtomText value="Peduli Digital Market"
              size="40px"
              weight="900"
              lineHeight="36px"
            />
            <AtomText value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit libero orci, non fringilla ante maximus eu. Quisque faucibus ornare enim sit amet cursus. Praesent molestie vestibulum ligula, suscipit commodo dolor volutpat vitae. Suspendisse ante tellus, aliquet ut auctor vitae, varius maximus enim. Praesent ut nisi ac massa lobortis faucibus et quis nisi. Nulla ipsum mauris, bibendum eget justo."
              align="justify"
              size="14px"
              lineHeight="30px"
            />
            <div className="mt-5">
              <AtomButton value="Browse All Product"
                background="#0086CF"
                color="#FFFFFF"
                padding="10px 30px 10px 20px"
                border="none"
                radius="10px"
              />
              <AtomButton value="Follow This Board"
                background="#F0F0F0"
                color="#787878"
                padding="10px 30px 10px 20px"
                margin="0 0 0 30px"
                border="none"
                radius="10px"
              />
            </div>
          </div>
          <div className="col-md-6">
            <img src="/homepage/beranda.png" />
          </div>
        </div>
        <div className="mt-5" style={{
          width: "100%",
          height: "500px",
          background: "#F9F9F9"
        }}>
          <div className="row container">
            <div className="col-12 text-left pt-5">
              <AtomText value="Forever Bag" weight="bold" size="24px" lineHeight="30px" />
            </div>
            {products.map(product => {
              return (<>
                <div className="col-3"><MoleculeProduct
                  image={product.image[0]}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                />
                </div>
              </>);
            })}
          </div>
        </div>
      </center>
    </>
  )
}