import * as React from "react";
import styled from "styled-components";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CardWrapper = styled.div`


  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px 15px;
  border-radius: 5px;
  background-color: white;
`;

export default function BasicCard(props) {
  const { description, value } = props;
  return (
    <CardWrapper>
      <Typography variant="h6" color="black">
        {description}
      </Typography>

      <Typography variant="h4" color="black" >
        {value}
      </Typography>
    </CardWrapper>
  );
}
