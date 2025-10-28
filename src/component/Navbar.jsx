import React from "react";
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
  const MENU_LIST = ["women", "men", "kids", "home"];

  return (
    <div>
      <div className="login-button">
        <FontAwesomeIcon icon="fa-solid fa-user" />
        <FontAwesomeIcon icon="fa-regular fa-user" />
        <div>로그인</div>
      </div>
      <div className="nav-section">
        <h1>
          <img
            width={128}
            src="https://brandyhq.com/wp-content/uploads/2024/12/H-and-M-Logo.jpg"
            alt="H&M Logo"
          />
        </h1>
      </div>

      <nav className="menu-area">
        <ul className="menu-list">
          {MENU_LIST.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
        <div className="search-wrap">
          <FontAwesomeIcon icon="fa-solid fa-search" />
          <input type="text" name="" id="" placeholder="검색" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
