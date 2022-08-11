import React from "react";
// import "./sidebar.scss";
import SidebarItem from "./SidebarItem";
import { routes } from "../../menuData";
import { Link } from "next/link";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar-container">
        {/* <section class="sidebar-container__title"> */}
        <Link to="/" class="sidebar-container__title">
          <img
            src="https://icon-library.com/images/icon-logo-png/icon-logo-png-23.jpg"
            width="40px"
            alt="logo"
          />
          <h4>CompanyName</h4>
        </Link>
        {/* </section> */}

        <hr />

        <nav className="sidebar-container__links">
          {routes.map((routeItem) => (
            <SidebarItem
              name={routeItem.name}
              path={routeItem.path}
              icon={routeItem.icon}
            />
          ))}
        </nav>
      </section>
    </>
  );
};

export default Sidebar;
