import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../page/ProductDetail";

const PrivateRoute = ({ authenticate, myUrl }) => {
  return authenticate ? (
    <ProductDetail myUrl={myUrl} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
