import React from "react";
import styled from "styled-components";
import { FaTwitter, FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";

const CommonHeader = () => {
  const [iconSize, setIconSize] = React.useState(35);

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setIconSize(24);
      } else if (width <= 1024) {
        setIconSize(32);
      } else {
        setIconSize(35);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Header>
      <Title>Cosmictheta</Title>
      <SnsCOntainer>
        <Sns>
          <FaTwitter size={iconSize} color={"#ccc"} />
        </Sns>
        <Sns>
          <FaInstagram size={iconSize} color={"#ccc"} />
        </Sns>
        <Sns>
          <FaYoutube size={iconSize} color={"#ccc"} />
        </Sns>
        <Sns>
          <FaDiscord size={iconSize} color={"#ccc"} />
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
  @media (max-width: 480px) {
    margin-left: 8px;
  }
`;

const Sns = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  @media (max-width: 480px) {
    margin-left: 8px;
    margin-right: 8px;
  }
  svg {
    width: 35px;
    height: 35px;
    @media (max-width: 480px) {
      width: 25px;
      height: 25px;
    }
  }
`;

export default CommonHeader;
