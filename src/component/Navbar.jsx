import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

// * Layout *
// 로그인/로그아웃
// Logo
// nav + Search Bar

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const MENU_LIST = ["women", "men", "kids", "home"];

  const handleDelete = () => {
    setSearchText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleDelete();
      console.log("TODO: 검색 기능 채워넣기");
      // handleSubmit(); // 작성한 검색어 검색 요청 함수
    }
  };

  return (
    <div className="nav-bar-wrapper">
      <h1 className="logo">
        <a href="#">
          <img
            width={128}
            src="https://brandyhq.com/wp-content/uploads/2024/12/H-and-M-Logo.jpg"
            alt="H&M Logo"
          />
        </a>
      </h1>
      <div className="login-button">
        <FontAwesomeIcon icon="fa-regular fa-user" />
        <div>로그인</div>
      </div>
      <nav className="menu-area">
        <ul className="menu-list">
          {MENU_LIST.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
        <div className="search-wrap">
          <FontAwesomeIcon icon="fa-solid fa-search" />
          <input
            type="text"
            name=""
            id=""
            placeholder="검색"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {searchText && (
            <FontAwesomeIcon icon="fa-solid fa-xmark" onClick={handleDelete} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
