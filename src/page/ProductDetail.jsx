import React, { useEffect } from "react";
import { useParams } from "react-router";

const ProductDetail = ({ myUrl }) => {
  let { id } = useParams();

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    let url = `${myUrl}${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>상품 상세 페이지</h1>
    </div>
  );
};

export default ProductDetail;
