import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import DashboardImg from "../assets/img/adminDashboardImg.png";
import AbShaadiImg from "../assets/img/abshaadiImg.PNG";
import CreworkCloneImg from "../assets/img/creworkCloneImg.PNG";
import EcommerceImg from "../assets/img/ecommerceImg.PNG";
import MyTeamImg from "../assets/img/myteamImg.PNG";
import OutlookCloneImg from "../assets/img/outlookCloneImg.PNG";
import QuizImg from "../assets/img/quizImg.PNG";
import SimpleSiteImg from "../assets/img/simpleSiteImg.PNG";
import SyragoImg from "../assets/img/syragoImg.PNG";
import TodoListImg from "../assets/img/todoListImg.PNG";
import TodoTaskImg from "../assets/img/todoTaskImg.PNG";
import LoginImg from "../assets/img/loginImg.PNG";
import WeatherImg from "../assets/img/weatherImg.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Admin Dashboard",
      liveLink: "https://admin-dashboard1212.netlify.app/",
      codeLink: "https://github.com/DEV-SHUKLA-GITHUB/Admin-Dashboard",
      imgUrl: DashboardImg,
    },
    {
      title: "Ecommerce Site",
      liveLink: "https://ecommerce-react-app-1212.netlify.app/",
      codeLink: "https://github.com/DEV-SHUKLA-GITHUB/Ecommerce-",
      imgUrl: EcommerceImg,
    },
    {
      title: "Outlook Clone",
      liveLink: "https://moonshot-outlook-clone-1212.netlify.app/",
      codeLink: "https://github.com/DEV-SHUKLA-GITHUB/moonshot-project",
      imgUrl: OutlookCloneImg,
    },
    {
      title: "Quiz app",
      liveLink: "https://moonshot-outlook-clone-1212.netlify.app/",
      codeLink: "https://github.com/DEV-SHUKLA-GITHUB/moonshot-project",
      imgUrl: QuizImg,
    },
    {
      title: "AbShaadi site",
      liveLink: "https://abshaadi.com",
      codeLink: "https://github.com/DEV-SHUKLA-GITHUB/abshadi",
      imgUrl: AbShaadiImg,
    },
    {
      title: "Task Management App",
      liveLink: "https://task-management-app-1212.netlify.app/",
      codeLink: "https://github.com/DEV-SHUKLA-GITHUB/Task-Management-App",
      imgUrl: TodoTaskImg,
    },
  ];
  const projects2 = [
    {
      title: "Crework site clone",
      liveLink: "https://reactcreworkclone.netlify.app/",
      codeLink: "https://github.com/DEV-SHUKLA-GITHUB/Crework_Clone",
      imgUrl: CreworkCloneImg,
    },
    {
      title: "Syrago Site",
      liveLink: "https://suraj000000.netlify.app/",
      codeLink: "https://github.com/DEV-SHUKLA-GITHUB/Syrago",
      imgUrl: SyragoImg,
    },
    {
      title: "Todo App",
      liveLink: "https://todo-app-1212.netlify.app/",
      codeLink: "https://github.com/DEV-SHUKLA-GITHUB/Todo-app",
      imgUrl: TodoListImg,
    },
    {
      title: "Login Signup Page",
      liveLink: "https://css-login-signup-page.netlify.app/",
      codeLink: "https://github.com/DEV-SHUKLA-GITHUB/Login_signup_page",
      imgUrl: LoginImg,
    },
    {
      title: "My Team site",
      liveLink: "https://golden-cajeta-509c80.netlify.app/",
      codeLink: "https://github.com/DEV-SHUKLA-GITHUB/Crework_week3",
      imgUrl: MyTeamImg,
    },
    {
      title: "simple site",
      liveLink: "https://simpledevsnest.netlify.app/",
      codeLink: "https://github.com/DEV-SHUKLA-GITHUB/Devsnest-Mini-Hackathon",
      imgUrl: SimpleSiteImg,
    },
  ];
  const projects3 = [
    {
      title: "weather app",
      liveLink: "https://weather-app-9876.netlify.app/",
      codeLink: "https://github.com/DEV-SHUKLA-GITHUB/apiIntegrationInWeb",
      imgUrl: WeatherImg,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some projects I have worked on that showcase my expertise in Frontend Development and Full Stack Development, and my ability to solve real-world problems through programming.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
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
                            projects2.map((project, index) => {
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
                        <Row>
                          {
                            projects3.map((project, index) => {
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
