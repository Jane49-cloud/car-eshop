import React from "react";
import logo from "../assets/carlogo.png";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { Dropdown, DropdownButton } from "react-bootstrap";
import sublinks from "../TestData";
import { useNavigate } from "react-router-dom";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

const Navbar = () => {
  const navigate = useNavigate();
  const { openSidebar, closeSubmenu, openSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) closeSubmenu();
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img
            src={logo}
            className="nav-logo"
            alt="logo"
            onClick={() => navigate("/")}
          />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars></FaBars>
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <li key={index}>
                <DropdownButton
                  className="dp-btn"
                  title={page}
                  onMouseOver={(e) => displaySubmenu(e)}>
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <Dropdown.Item href={url} key={index}>
                        {icon}
                        {label}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
              </li>
            );
          })}
        </ul>
        <div className="row ">
          <button
            className="btn signin-btn mr-2"
            onClick={() => navigate("/newcar/stepone")}>
            <LibraryAddIcon />
            new car
          </button>
          <button className="btn signin-btn" onClick={() => navigate("/login")}>
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
