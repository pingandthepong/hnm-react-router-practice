import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";

library.add(fas, far, fab);

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const MENU_LIST = ["women", "men", "kids", "home"];

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // DONE: 입력한 검색어를 읽어와서
      let keyword = e.target.value;
      // DONE: URL 바꿔주기
      navigate(`/?q=${keyword}`);
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

  const toLogOut = (e) => {
    if (authenticate) {
      setAuthenticate(false);
    }
  };
  return (
    <>
      <Dropdown className="dropdown-wide" onToggle={(open) => setIsOpen(open)}>
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

      <div className="nav-bar-wrapper">
        <Link to="/" className="logo">
          <h1 className="a11y-hidden">H&M</h1>
          <img
            width={128}
            src="https://brandyhq.com/wp-content/uploads/2024/12/H-and-M-Logo.jpg"
            alt="H&M Logo"
          />
        </Link>

        <nav className="menu-area">
          <h2 className="a11y-hidden">Global Navigation</h2>
          <ul className="menu-list">
            {MENU_LIST.map((menu) => (
              <li key={menu}>{menu}</li>
            ))}
          </ul>
          <div className="icons-wrap">
            <div className="search-wrap">
              <FontAwesomeIcon icon="fa-solid fa-search" />
              <input
                type="text"
                name=""
                id=""
                placeholder="검색"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
              />
              {searchText && (
                <FontAwesomeIcon
                  icon="fa-solid fa-xmark"
                  onClick={() => setSearchText("")}
                />
              )}
            </div>
            <Link to="/Login" className="login-button" onClick={toLogOut}>
              <FontAwesomeIcon icon="fa-regular fa-user" />
              <div>{authenticate ? "Log Out" : "Log In"}</div>
              {/* <div>Log In</div> */}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
