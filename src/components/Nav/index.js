import React from "react";

import styled from "styled-components";

import NavHeader from "./NavHeader";
import NavItem from "./NavItem";

import { navConfig } from "./config";

const NavStyled = styled.aside`
  grid-area: sidebar;
  height: 100%;
  background-color: #263043;
  overflow-y: auto;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  display: ${(props) => (props.openSidebarToggle ? `inline !important` : ``)};
  position: ${(props) => (props.openSidebarToggle ? `absolute` : `relative`)};
  z-index: ${(props) => (props.openSidebarToggle ? `12 !important` : ``)};
 

  ul {
    padding: 0;
    list-style-type: none;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const Nav = ({ openSideBar }) => {
  return (
    <NavStyled >
      <NavHeader openSideBar={openSideBar} />

      <ul>
        {navConfig.map((navItem) => {
          const { title, to, icon } = navItem;
          return <NavItem title={title} to={to} icon={icon} key={`nav-menu-item-${title}`} />;
        })}
      </ul>
    </NavStyled>
  );
};

export default Nav;
