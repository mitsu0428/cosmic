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
  margin-left: 16px;
  font-size: 48px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const SnsCOntainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
`;

const Sns = styled.div`
  margin-left: 16px;
  margin-right: 16px;
`;

export default CommonHeader;
