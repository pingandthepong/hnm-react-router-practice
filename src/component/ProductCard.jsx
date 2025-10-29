import React from "react";
import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const ProductCard = ({ item }) => {
  const price = new Intl.NumberFormat("ko-KR").format(item?.price);
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <Stack onClick={showDetail} gap={1}>
      <div className="image-wrapper">
        <img width={"100%"} src={item?.img} alt={`${item?.title} 이미지`} />
      </div>
      <Stack direction="horizontal" gap={1}>
        <div>
          {item?.choice ? (
            <Badge pill bg="primary">
              Conscious Choice
            </Badge>
          ) : (
            ""
          )}
        </div>
        <div>
          {item?.new ? (
            <Badge pill bg="warning">
              New
            </Badge>
          ) : (
            ""
          )}
        </div>
      </Stack>
      <div style={{ fontSize: ".85rem", fontWeight: 700 }}>{item?.title}</div>
      <div style={{ fontSize: ".75rem", fontWeight: 300 }}>₩{price}</div>
    </Stack>
  );
};

export default ProductCard;
