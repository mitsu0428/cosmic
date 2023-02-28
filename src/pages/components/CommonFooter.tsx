import React from "react";
import styled from "styled-components";

const CommonFooter = () => {
  return (
    <Footer>
      <Text>© 2023 CosmicΘ</Text>
    </Footer>
  );
};

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export default CommonFooter;
