import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography, useTheme } from "@mui/material";

const NavItemStyled = styled.li`
  padding: 20px 20px 20px 20px;
  font-size: 18px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }

  & > a {
    text-decoration: none;
    color: #9e9ea4;
  }
`;

const NavItem = (props) => {
  const { title, to, icon, selected } = props;

  return (
    <NavItemStyled active={selected === title}>
      <Link to={to}>
        {icon}
        <Typography sx={{ color: "red", textEffect: "none" }}>
          {title}
        </Typography>
      </Link>
    </NavItemStyled>
  );
};

export default NavItem;
