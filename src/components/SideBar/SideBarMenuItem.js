import React from "react";

import { MenuItem } from "react-pro-sidebar";
import { Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "config/theme";

const SideBarMenuItem = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Link to={to}>
        <Typography sx={{color:"red", textEffect:"none"}}>{title}</Typography>
      </Link>
    </MenuItem>
  );
};

export default SideBarMenuItem;
