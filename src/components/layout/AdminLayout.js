import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Col, Container, Row } from "react-bootstrap";
import { SidebarMenu } from "../sidebar-menu/SidebarMenu";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      <div className="adminLayout">
        <Header />

        <Container fluid>
          <Row>
            <Col
              xs={4}
              className="bg-dark text-light ps-4 pt-3"
              style={{ minHeight: "100vh", minWidth: "200px" }}
            >
              {/* sidebar menu */}
              <SidebarMenu />
            </Col>
            <Col>{children}</Col>
          </Row>
        </Container>

        <Footer />
      </div>
    </div>
  );
};
