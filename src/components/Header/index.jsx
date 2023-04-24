import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Images from "../../assets/Images/image 7.png";
import Imagesa from "../../assets/Images/Subtract (1).png";
import Imagesb from "../../assets/Images/Subtract.png";
import style from "./style.module.css";
import { Row, Col } from "react-bootstrap";

function Header({ navbars }) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#152A46",
        padding: "20px",
        color: "white",
        textAlign: "center",
      }}
    >
      <Navbar bg="#152A46" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navbars.map((item, idx) => {
                return (
                  <Nav.Link key={idx} href="#home">
                    {item}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row>
        <Col sm="6">
          <h2 col>Jadi expert bersama edspert.id</h2>
          <p>
            Tingkatkan skill dan pengetahuan bersama para mentor terbaik di
            bidangnya, untuk siapkan karir impian anda.
          </p>
        </Col>
        <Col sm="6">
          <img src={Images} className="gambar-mba"></img>
          <img src={Imagesa} className="gambar-mba"></img>
          <img src={Imagesb} className="gambar-mba"></img>
        </Col>
      </Row>

      <div></div>
    </div>
  );
}

export default Header;
