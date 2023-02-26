import React from "react";
import styled from "styled-components";

function CosmicTheta() {
  return (
    <Container>
      <Title>Cosmic Θ</Title>
    </Container>
  );
}

export default CosmicTheta;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Title = styled.h1`
  height: 100vh;
  font-size: 2rem;
  margin-left: 1rem;
  text-align: center; // 新しい行
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
