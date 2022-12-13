import React from "react";
import styled from "styled-components";

function CommonHeader() {
  return (
    <BasicTitleArea>
      <BasicTitle>CosmicΘ</BasicTitle>
    </BasicTitleArea>
  );
}

export default CommonHeader;

const BasicTitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const BasicTitle = styled.h1`
  font-size: 3rem;
  margin: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
