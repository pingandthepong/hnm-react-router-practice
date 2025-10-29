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
    userPassword: yup
      .string()
      .min(5, "비밀번호는 최소 5자리 이상이어야 합니다.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{5,}$/,
        "영문과 숫자를 포함해 주세요."
      )
      .required("비밀번호를 입력해주세요."),
  });

  const loginUser = (e) => {
    // refresh 막기
    // e.preventDefault();
  };

  return (
    <Container className="login-wrapper">
      <Row>
        <Col>
          <h1 className="title">로그인</h1>
        </Col>
      </Row>
      <Row>
        <button className="custom-btn btn-kakao">
          <FontAwesomeIcon icon="fa-brands fa-kakao-talk" />
          카카오로 로그인
        </button>
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
            onSubmit={(e) => {
              loginUser(e);
            }}
            initialValues={{ userEmail: "", userPassword: "" }}>
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    controlId="validationUserEmail"
                    className="mb-2">
                    <Form.Label className="title after-valid">
                      이메일
                    </Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupEmailPrepend">
                        <FontAwesomeIcon icon="fa-solid fa-user" />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="email@example.com"
                        aria-describedby="inputGroupEmailPrepend"
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
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label className="title">비밀번호</Form.Label>

                    {/* <Form.Control type="password" placeholder="Password" /> */}
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPasswordPrepend">
                        <FontAwesomeIcon icon="fa-solid fa-key" />
                      </InputGroup.Text>
                      <Form.Control
                        type="password"
                        placeholder="*****"
                        aria-describedby="inputGroupPasswordPrepend"
                        name="userPassword"
                        value={values.userPassword}
                        onChange={handleChange}
                        isInvalid={
                          touched.userPassword && !!errors.userPassword
                        }
                        minLength={4}
                        required
                        autoComplete="off"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.userPassword}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <div className="d-grid">
                    <Button variant="dark" type="submit" className="bdrs-0">
                      로그인
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
  );
};

export default Login;
