import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import BetaCard from '../BetaCard/BetaCard';
import colorSharp2 from '../../assets/img/color-sharp2.png'
import area1 from "../../assets/img/area1.PNG";
import area2 from "../../assets/img/area2.PNG";
import area3 from "../../assets/img/area3.PNG";
import room1 from "../../assets/img/room1.PNG";
import room2 from "../../assets/img/room2.PNG";
import room3 from "../../assets/img/room3.PNG";
import perimeter1 from "../../assets/img/perimeter1.PNG";
import perimeter2 from "../../assets/img/perimeter2.PNG";
import perimeter3 from "../../assets/img/perimeter3.PNG";
import './Beta.css'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Beta = () => {

  const rooms = [
    {
      title: "Add/Remove a room",
      description: "room configuration in floorplan",
      imgUrl: room1,
    },
    {
      title: "Room adjacency",
      description: "Rooms to be together",
      imgUrl: room2,
    },
    {
      title: "Room added",
      description: "Room added to floorplan automatically",
      imgUrl: room3,
    },
  ];
    const area = [
      {
        title: "Adjust area",
        description: "Slide to adjust area of any room",
        imgUrl: area1,
      },
      {
        title: "Area manipulation",
        description: "Area gets automatically applied in floorplan",
        imgUrl: area2,
      },
      {
        title: "Final floorplan",
        description: "Floorplan updated with current settings",
        imgUrl: area3,
      },
    ];
    
    const perimeter = [
      {
        title: "Perimeter Grid",
        description: "Click on Draw Perimeter to enable it",
        imgUrl: perimeter1,
      },
      {
        title: "Drag & tap",
        description: "Drag with finger to make your desired perimeter",
        imgUrl: perimeter2,
      },
      {
        title: "Updated layout",
        description: "Floorplan updated according to new layout",
        imgUrl: perimeter3,
      },
      
    ];
  
    return (
      <section className="project" id="beta">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Beta test</h2>
                  <p>One of the standout features of Generative Floorplans is the ability to customize room areas. Users have the flexibility to adjust the size of individual rooms according to their specific requirements. Whether you need a spacious living room or a compact office space, the application empowers you to create floorplans tailored to your needs.</p>
                  <p>To give you a glimpse of the application's capabilities, we have attached a few screenshots below. These images showcase the intuitive interface, the room customization options, and the seamless process of drawing a custom layout. We believe these visuals will help you better understand how Generative Floorplans can revolutionize your floorplan creation process.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Select rooms</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Adjust area</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Adjust Perimeter</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            rooms.map((project, index) => {
                              return (
                                <BetaCard
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
                            area.map((project, index) => {
                              return (
                                <BetaCard
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
                            perimeter.map((project, index) => {
                              return (
                                <BetaCard
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
        <img className="background-image-right" src={colorSharp2} alt=''></img>
      </section>
    )
  }
  

export default Beta