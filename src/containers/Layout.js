import React from "react";
import { Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { Content, Footer, Header, Sidebar } from "./index";
import config from "../config";

function Layout() {
  return (
    <Container fluid="ms" className="vh-100 d-flex flex-column">
      <Row as="header" className="mb-auto mx-0">
        <Header />
      </Row>
      <Row className="m-0">
        <Route path="/results">
          <Sidebar />
        </Route>
        <Content routes={config.routes} />
      </Row>
      <Row as="footer" className="mt-auto mx-0">
        <Footer />
      </Row>
    </Container>
  );
}

export default Layout;
