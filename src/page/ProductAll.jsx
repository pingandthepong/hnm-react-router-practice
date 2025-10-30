import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap/";

// DONE: 한 줄에 네 개씩 들어간다.
// DONE: 화면이 좁아지면 1개씩 보여주기

const ProductAll = ({ myUrl }) => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";

    // 모든 상품 정보 가져오기
    let url = `${myUrl}products/?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu, idx) => {
            return (
              <Col md={3} key={idx} style={{ cursor: "pointer" }}>
                <ProductCard item={menu} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
