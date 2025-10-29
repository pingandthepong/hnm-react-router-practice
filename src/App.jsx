import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import PrivateRoute from "./route/PrivateRoute";

// * Goals *
// 1. Router 구성
// 2. 검색

// * User Story *
// DONE: 1. 전체상품페이지, 로그인페이지, 상품디테일페이지
// DONE: 1-1. 내비게이션 바
// DONE: 2. 전체상품페이지: 전체 상품을 볼 수 있다.
// DONE: 3. 로그인페이지: 로그인 페이지가 나옴
// DONE: 4. 상품디테일 클릭 시, isLogin ? 상품디테일페이지 : 로그인페이지
// TODO: 5. 로그아웃버튼 클릭 시, 로그아웃 & 상품디테일 페이지 볼 수 없음 & 다시 로그인페이지 보임
// TODO: 6. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
// TODO: 7. 상품 검색 가능

function App() {
  let [loading, setLoading] = useState(false);
  let [authenticate, setAuthenticate] = useState(false); // false 비로그인, true 로그인

  useEffect(() => {
    console.log("authenticate: ", authenticate);
  }, [authenticate]);

  return (
    <>
      <Navbar authenticate={authenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </>
  );
}

export default App;
