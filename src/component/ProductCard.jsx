import React from "react";

const ProductCard = ({ item }) => {
  const price = new Intl.NumberFormat("ko-KR").format(item?.price);

  return (
    <div>
      <div className="image-wrapper">
        <img width={"100%"} src={item?.img} alt="" />
      </div>
      <div>{item?.choice ? "Conscious Choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{price}</div>
      <div>{item?.new ? "NEW" : ""}</div>
    </div>
  );
};

export default ProductCard;
