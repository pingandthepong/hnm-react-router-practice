import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";

library.add(fas, far, fab);

const Navbar = ({ authenticate }) => {
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
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

  const DROPDOWN_ITEMS = [
    "회원 가입하기",
    "여성",
    "남성",
    "영유아",
    "아동",
    "H&M HOME",
    "기프트 카드 추첨 이벤트",
  ];

  return (
    <div className="nav-bar-wrapper">
      <Dropdown
        className="dropdown-wide"
        // show={}
        onToggle={(open) => setIsOpen(open)}>
        <Dropdown.Toggle variant="white" id="dropdown-common">
          새로운 회원 특별가 제품과 회원 전용 이벤트를 만나보세요!
          {isOpen ? (
            <FontAwesomeIcon icon={"fa fa-minus"} />
          ) : (
            <FontAwesomeIcon icon={"fa fa-plus"} />
          )}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {DROPDOWN_ITEMS.map((item, idx) => (
            <Dropdown.Item href="#" onClick={(e) => e.preventDefault} key={idx}>
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
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
