import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Contact.css';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setButtonText("Sending...");
    // let response = await fetch("http://localhost:5000/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(formDetails),
    // });
    setButtonText("Send");
    // let result = await response.json();
    setFormDetails(formInitialDetails);
    setStatus({ succes: true, message: 'Message sent successfully'});
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form target="_blank" action="https://formsubmit.co/16ceac9c2595bdde45fb1fafdc2b4e58" rel="noreferrer" method="POST">
                  <input type="hidden" name="_captcha" value="false"/>
                  <input type="hidden" name="_next" value="http://home.iitj.ac.in/~quadri.2/thankyou.html" target="_blank" rel="noreferrer"/>
                  <input type="hidden" name="_template" value="table"/>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col">
                        <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                      </div>
                      <div className="col">
                        <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-lg btn-dark btn-block"><span>{buttonText}</span></button>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
