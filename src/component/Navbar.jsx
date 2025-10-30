import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Dropdown, Offcanvas, Button } from "react-bootstrap";

library.add(fas, far, fab);

// TODO: md 이하부터는 햄버거 메뉴로 변경

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

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
      {/* 상단 공통 안내 드롭다운 */}
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

      {/* PC용 네비게이션 */}
      <div className="nav-bar-wrapper d-none d-md-flex">
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
            </Link>
          </div>
        </nav>
      </div>

      {/* 모바일용 햄버거 메뉴 */}
      <div className="d-md-none d-flex justify-content-between align-items-center px-3 py-2">
        <Link to="/" className="logo">
          <img
            width={100}
            src="https://brandyhq.com/wp-content/uploads/2024/12/H-and-M-Logo.jpg"
            alt="H&M Logo"
          />
        </Link>
        <Button
          variant="white"
          className="border-0"
          onClick={() => setShowHamburger(true)}>
          <FontAwesomeIcon icon="fa-solid fa-bars" size="lg" />
        </Button>
      </div>

      <Offcanvas
        show={showHamburger}
        onHide={() => setShowHamburger(false)}
        placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>메뉴</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled">
            {MENU_LIST.map((menu) => (
              <li key={menu} className="mb-2">
                <Link
                  to={`/`}
                  onClick={() => setShowHamburger(false)}
                  className="text-decoration-none text-dark">
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
          <hr />
          <Link
            to="/Login"
            onClick={() => setShowHamburger(false)}
            className="text-decoration-none text-dark">
            {authenticate ? "Log Out" : "Log In"}
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
