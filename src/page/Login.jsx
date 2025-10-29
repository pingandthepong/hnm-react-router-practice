import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap/";
import * as formik from "formik";
import * as yup from "yup";

const Login = () => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    userEmail: yup
      .string()
      .email("올바른 이메일 주소를 입력해주세요.")
      .required("이메일을 입력해주세요."),
  });

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="title">로그인</h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-grid">
            <button className="custom-btn btn-kakao">
              <FontAwesomeIcon icon="fa-brands fa-kakao-talk" />
              카카오로 로그인
            </button>
          </Col>
        </Row>
        <Row>
          <p className="hr">OR</p>
          <p className="login-desc">
            이메일로 로그인하거나 비회원이시면 계정에서 사용할 이메일 주소를
            입력하세요.
          </p>
          <div>
            <Formik
              validationSchema={schema}
              onSubmit={(values) => console.log(values)}
              initialValues={{ userEmail: "" }}>
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationUserEmail">
                      <Form.Label className="title after-valid">
                        이메일
                      </Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          <FontAwesomeIcon icon="fa-solid fa-user" />
                        </InputGroup.Text>
                        <Form.Control
                          type="email"
                          placeholder="email@example.com"
                          aria-describedby="inputGroupPrepend"
                          name="userEmail"
                          value={values.userEmail}
                          onChange={handleChange}
                          isInvalid={touched.userEmail && !!errors.userEmail}
                          autoComplete="off"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.userEmail}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <div className="d-grid">
                      <Button variant="dark" type="submit" className="bdrs-0">
                        계속하기
                      </Button>
                      <p className="hr m-sm">
                        <FontAwesomeIcon icon="fa-solid fa-lock" />
                        모든 데이터는 안전하게 보호됩니다.
                      </p>
                    </div>
                  </Row>
                </Form>
              )}
            </Formik>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
