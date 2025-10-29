import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const Navbar = ({ authenticate }) => {
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
      <Link to="/" className="logo">
        <h1 className="a11y-hidden">H&M</h1>
        <img
          width={128}
          src="https://brandyhq.com/wp-content/uploads/2024/12/H-and-M-Logo.jpg"
          alt="H&M Logo"
        />
      </Link>
      <Link to="/Login" className="login-button">
        <FontAwesomeIcon icon="fa-regular fa-user" />
        <div>{authenticate ? "로그아웃" : "로그인"}</div>
      </Link>
      <nav className="menu-area">
        <h2 className="a11y-hidden">Global Navigation</h2>
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
