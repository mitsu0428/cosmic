import React from "react";
import styled from "styled-components";
import { FaTwitter, FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";

const CommonHeader = () => {
  return (
    <Header>
      <Title>Cosmictheta</Title>
      <SnsCOntainer>
        <Sns>
          <FaTwitter size={35} color={"#ccc"} />
        </Sns>
        <Sns>
          <FaInstagram size={35} color={"#ccc"} />
        </Sns>
        <Sns>
          <FaYoutube size={35} color={"#ccc"} />
        </Sns>
        <Sns>
          <FaDiscord size={35} color={"#ccc"} />
        </Sns>
      </SnsCOntainer>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: #000000;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-left: 1rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const SnsCOntainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;

const Sns = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;

export default CommonHeader;
