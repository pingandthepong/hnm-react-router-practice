import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  Badge,
  Dropdown,
  Button,
  Offcanvas,
} from "react-bootstrap/";

const ProductDetail = ({ myUrl }) => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const price = new Intl.NumberFormat("ko-KR").format(product?.price);
  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [openDropdowns, setOpenDropdowns] = useState({
    guide: false,
    fit: false,
    material: false,
  });
  const handleToggle = (key, isOpen) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: isOpen }));
  };

  const getProductDetail = async () => {
    try {
      let url = `${myUrl}products/${id}`;
      let response = await fetch(url);
      let data = await response.json();
      setProduct(data);
    } catch (err) {
      alert("상품을 불러올 수 없습니다. 관리자에게 문의해주세요.");
    }
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <h1 className="a11y-hidden">상품 상세 페이지</h1>

      <Row>
        <Col>
          <div className="image-wrapper">
            <img src={product?.img} alt={`${product?.title} 이미지`} />
          </div>
        </Col>
        <Col className="detail-info-wrap">
          <div className="detail-info-wrap-inner">
            <h2
              style={{
                fontSize: ".85rem",
                fontWeight: "400",
                marginBottom: "0",
              }}>
              {product?.title}
            </h2>
            <p
              style={{
                fontSize: ".85rem",
                fontWeight: "700",
                marginBottom: "0",
              }}>
              ₩{price}
            </p>
            <p>
              {product?.choice ? (
                <Badge pill bg="primary">
                  Conscious Choice
                </Badge>
              ) : (
                ""
              )}
            </p>
            <Dropdown>
              <Dropdown.Toggle variant="white" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {sizes.map((size, idx) => (
                  <Dropdown.Item href="#" key={idx}>
                    {size}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <div className="mt-4 text-end">
              <Button
                variant="white"
                onClick={handleShow}
                style={{
                  fontSize: ".75rem",
                  textDecoration: "underline",
                }}>
                사이즈 가이드
              </Button>
              <Offcanvas show={show} onHide={handleClose} placement={"end"}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>사이즈 가이드</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Dropdown onToggle={(open) => handleToggle("guide", open)}>
                    <Dropdown.Toggle variant="white" id="dropdown-common-2">
                      측정 방법
                      {isOpen ? (
                        <FontAwesomeIcon icon={"fa fa-minus"} />
                      ) : (
                        <FontAwesomeIcon icon={"fa fa-plus"} />
                      )}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#">방법1</Dropdown.Item>
                      <Dropdown.Item href="#">방법2</Dropdown.Item>
                      <Dropdown.Item href="#">방법3</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
            <div className="d-grid mt-2">
              <Button variant="dark" type="submit" className="bdrs-0">
                추가
              </Button>
            </div>
            <div className="d-grid mt-4">
              <Dropdown onToggle={(open) => handleToggle("fit", open)}>
                <Dropdown.Toggle variant="white" id="dropdown-common-2">
                  설명 & 핏
                  {isOpen ? (
                    <FontAwesomeIcon icon={"fa fa-minus"} />
                  ) : (
                    <FontAwesomeIcon icon={"fa fa-plus"} />
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">1</Dropdown.Item>
                  <Dropdown.Item href="#">2</Dropdown.Item>
                  <Dropdown.Item href="#">3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
