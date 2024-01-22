import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";

import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

import { useDispatch } from "react-redux";

import { logoutVolunteerAction } from "containers/Volunteers/actions";

import logo from "assets/images/ForsterLogoBlue.png";

const HeaderStyled = styled.header`
  grid-area: header;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  box-shadow: 0 6px 7px -3px rgba(0, 0, 0, 0.35);

  .menu-icon {
    display: none;
  }

  img {
    width: 50px;
  }

  @media screen and (max-width: 992px) {
    /* .grid-container {
      grid-template-columns: 1fr;
      grid-template-rows: 0.2fr 3fr;
      grid-template-areas:
        'header'
        'main';
    } */

    /* #sidebar {
      display: none;
    } */

    .menu-icon {
      display: inline;
    }

    .sidebar-title > span {
      display: inline;
    }
  }
`;

function Header({ openSideBar }) {
  return (
    <HeaderStyled>
      <div className="menu-icon">
        <BsJustify className="icon" onClick={openSideBar} />
      </div>

      <img src={logo} />

      <div className="header-right">
        <Avatar
          sx={{ bgcolor: "blue" }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        />
      </div>
    </HeaderStyled>
  );
}

export default Header;
