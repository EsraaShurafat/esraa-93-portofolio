/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import promo2 from "assets/img/theme/promo-2.png";
import promo3 from "assets/img/theme/promo-3.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1
                        className="display-3 text-white"
                        style={{ marginTop: "50px" }}
                      >
                        Why software development My Choice ? <span></span>
                      </h1>
                      <p className="lead text-white" style={{ width: "800px" }}>
                      Web development gives you the opportunity to express yourself creatively on the internet , Fortunately , easy-to-learn, fun-to-experience life of a web developer is always a great choice for someone ready to have an exciting career in code.
            
                      </p>
                      {/* <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Components</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Download React
                          </span>
                        </Button>
                      </div> */}
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="3">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                          Creative
                          </h6>
                          <p className="description mt-3">
                          Developers are often thought of as problem solvers - and they are - however, web developers have the luxury of being able to flex their creative muscles. 
                          </p>
                          {/* <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div> */}
                          {/* <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="3">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i class="fa fa-line-chart" aria-hidden="true"></i>
                          </div>
                          <h6 className="text-warning text-uppercase">
                          Future Proof
                          </h6>
                          <p className="description mt-3">
                          developer skills are increasingly in demand. We could even see programming languages become more valuable than traditional spoken languages.
                          </p>
                          {/* <div>
                            <Badge color="success" pill className="mr-1">
                              business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="3">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                            <i class="fa fa-users" aria-hidden="true"></i>
                          </div>
                          <h6 className="text-info text-uppercase">
                         Community
                            <br />
                            
                          </h6>
                          <p className="description mt-3">
                          The online community for developers is huge, and if used to the full can be a source of technical support and a place with like-minded people. Online communities are a great resource that you can gain a lot from.
                          </p>
                          {/* <div>
                            <Badge color="success" pill className="mr-1">
                              business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="3">
                      <Card
                        className="card-lift--hover shadow border-0"
                        style={{ height: "435.6px" }}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
                          </div>
                          <h6 className="text-success text-uppercase">
                          Learning 
                          </h6>
                          <p className="description mt-3">
                          With web technology in constant growth, it’s a pretty exciting place to be. And with countless companies on the lookout for new talent, it's a perfect chance for aspiring developers to find their perfect role.
                          </p>
                          {/* <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <h1 style={{ fontSize: "3em", fontWeight: "bold" }}>
                 Projects
              </h1>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="floating"
                    src={promo1}
                    style={{ width: "600px", height: "600px" }}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h3>Website 1</h3>
                    <p>
                    <h5>Book Shop</h5>
                      <br />
                      The site is a place for selling electronic books, the site shows the name of the book, its classification and price, the user can buy the book by choosing the books he wants, then enter his name, number, address and send the request.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="info">
                              <i class="fa fa-css3" aria-hidden="true"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">CSS</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="info">
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">HTML</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="info">
                              <i class="fab fa-js-square"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">JavaScript</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="floating"
                    src={promo2}
                    style={{ width: "600px", height: "600px" }}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h3>Website 2</h3>
                    <p>
                    <h5>Art Gallery and Store</h5>
                    Online gallery and store for Different collections of artworks.
                      <ul>
                        <li>As a user, I would like to be able view a huge library of pieces of art, so we used an pre-existing art api where we can get arts from.</li>
                        <li>As a user, I would like to be able to add whatever art I like to my favorites collection, so that we added a favorite button included in art cards.</li>
                        <li>As a user, I would like to be able to post my own pieces of art, so that we made a page dedicated to that, where you can post your own arts using a form.</li>
                        <li>As a user, I would like to be able to see my own posted pieces of art, so that we made whatever the user posts gets rendered in that same page.</li>
                        <li>As a user, I would like to be able to read about developers and their vision, so that we made an about us page where you can just do that!</li>
                      
                      </ul>
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="danger">
                              <i class="fa fa-css3" aria-hidden="true"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">CSS</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="danger">
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">HTML</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="danger">
                              <i class="fab fa-js-square"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">JavaScript</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              {/* <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="floating"
                    src={promo3}
                    style={{ width: "600px", height: "600px" }}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h3>Bus Mall</h3>
                    <p>
                      The app’s purpose is to have the group members choose
                      which product, of the three displayed images, that they
                      would be most likely to purchase, and then store,
                      calculate, and visually display the resulting data.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i class="fa fa-css3" aria-hidden="true"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">CSS</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">HTML</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i class="fab fa-js-square"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">JavaScript</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row> */}
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning" style={{marginBottom:"150px"}}>
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={ill2}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-warning">
                      <i class="far fa-address-card"></i>
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">About Me</h4>
                      <p className="text-white">
                      A passionate Full Stack Web Developer and having an experience of building Web applications with JavaScript /Reactjs/HTML/CSS/Bootstrap/nosql/sql , and some other cool libraries and frameworks.
                      </p>
                    </div>
                  </div>
               
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
