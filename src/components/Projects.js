import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import geneXenv from "../assets/img/genexenv.png";
import findYourAnime from "../assets/img/find-your-anime.png";
import mailsite from "../assets/img/mailsite.png";
import expenseManager from "../assets/img/expense-manager.png";
import adminPanel from "../assets/img/admin-panel.png";
import turtlesim from "../assets/img/turtlesim.png";
import micromouse from "../assets/img/micromouse-portrait.png"
import chatbot from "../assets/img/chatbot.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Projects.css';

export const Projects = () => {

  const projects = [
    {
      title: "Gene X Environment",
      description: "An IIT Jodhpur specific search engine that searches any relevant research papers corresponding to authors, publishions, gene names and other keywords",
      imgUrl: geneXenv,
    },
    {
      title: "Find Your Anime",
      description: "A website for harcore Anime lovers. Allows users to search for any relevant anime. E.g., Naruto. I'm myself a big Naruot fan :)",
      imgUrl: findYourAnime,
    },
    {
      title: "Your Mail",
      description: "A mailing website that allows for people to create account and send each other mails. It can also send mails to any valid email ID",
      imgUrl: mailsite,
    },
    {
      title: "Chatbot Application",
      description: "A chatbot web application. It uses machine learning approach to identify diseases by analyzing the patient's converstation with the chatbot. The chatbot then cites some precautionary measures and allows the patient to book an appointment with the doctor",
      imgUrl: chatbot,
    },
    {
      title: "Expense Manager",
      description: "An Expense Manager Web application to keep track of all the expenses and filter them according to date/year and show a bar chart of the same",
      imgUrl: expenseManager,
    },
    {
      title: "Admin Panel",
      description: "An Admin Panel for e-commerce website to keep track of all the purchases, returned items, vendors, customer details, etc. and present in form of tables for the website administrator to add/remove/modify details as and when required",
      imgUrl: adminPanel,
    },
  ];

  const miscProjects = [
    {
      title: "Catch the turtle",
      description: "A turtlesim based Robot Operting System (ROS) project where the center turtle (main turtle) is automated to capture the nearby spawning turtles. Algorithms were implemented to collect the turtles in the order in which they were spawned, to catch the nearst turtle first or the fastest way to catch all the turtles in the screen. The path followed by the turtle was traced by a white marker",
      imgUrl: turtlesim,
    },
    {
      title: "IIT Bombay Meshmerize Challenge",
      description: "A Gazebo built ROS project which I call micromouse was developed during my participation in IIT Bombay Techfest 2019",
      imgUrl: micromouse,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Most of my projects are based on Web Developemnt and Machine Learning. However I sometimes also like tweeking with other technologies like ROS (Robot Operating System) and softwares like Gazebo9, etc. Such projects are listed under the Miscellaneous section.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first" className="no-click">
                  <div className="no-click">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item><Nav.Link eventKey="first">Projects</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="second">Miscellaneous</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="third">More info</Nav.Link></Nav.Item>
                    </Nav>
                  </div>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          miscProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Links to all these Projects could be found on my <a href="https://github.com/quadri-haider-ali" target="_blank" rel="noreferrer" className="github-link">Github</a> Handle. Please feel free to let me know of any changes or any scope of improvement in my projects.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
