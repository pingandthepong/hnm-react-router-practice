import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap/";

const Login = () => {
  return (
    <div>
      <Container>
        <Row xs={2} md={4} lg={6}>
          <Col>
            <h1>로그인</h1>
          </Col>
        </Row>
        <Row>
          <button className="login-kakao">
            <FontAwesomeIcon icon="fa-brands fa-kakao-talk" />
            카카오로 로그인
          </button>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
