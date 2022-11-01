import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import './Footer.css';

export const Footer = () => {
  const linkedInProfile = "https://www.linkedin.com/in/haider-ali-quadri-5a0b791a3";
  const fbProfile = "https://www.facebook.com/haiderali.quadri.902"
  const instaProfile = "https://www.instagram.com/haiderali.quadri.902";
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <i class="fa-solid fa-copyright"></i>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href={linkedInProfile} target="_blank"><img src={navIcon1} alt="" /></a>
                <a href={fbProfile} target="_blank"><img src={navIcon2} alt="" /></a>
                <a href={instaProfile} target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
