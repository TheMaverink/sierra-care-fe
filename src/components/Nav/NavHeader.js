import React from "react";
import styled from "styled-components";

const NavHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px 0px 30px;
  margin-bottom: 30px;

  & > span {
    display: none;
  }

  .sidebar-brand {
    margin-top: 15px;
    font-size: 20px;
    font-weight: 700;
  }
  @media screen and (max-width: 992px) {
    & > span {
      display: inline-block;
    }
  }
`;

const NavHeader = ({ openSideBar }) => {
  return (
    <NavHeaderStyled>
      <div className="sidebar-brand">Sierra Care</div>
      <span className="icon close_icon" onClick={openSideBar}>
        X
      </span>
    </NavHeaderStyled>
  );
};

export default NavHeader;
