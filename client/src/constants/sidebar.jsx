import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
import sublinks from "../TestData";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Sidebar = () => {
  const { closeSidebar, openSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <aside
      className={`${
        isSidebarOpen ? " sidebar-wrapper show" : "sidebar-wrapper"
      }`}>
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes></FaTimes>
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                {/* <h4>{page}</h4> */}
                <br />
                <div className="sidebar-sublinks">
                  <DropdownButton title={page}>
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
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
