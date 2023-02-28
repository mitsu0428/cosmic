import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaBars,
} from "react-icons/fa";

const CommonHeader = () => {
  const [iconSize, setIconSize] = React.useState(35);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <Header>
      <Logo
        src="/images/cosmic-theta.jpg"
        alt="cosmic theta"
        width={iconSize * 2}
        height={iconSize * 2}
      />
      <PcMenu>
        <MenuList>
          <MenuItem>
            <Link href="/mint">Mint now!</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/">Journal</Link>
          </MenuItem>
        </MenuList>
      </PcMenu>
      <SnsContainer>
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
      </SnsContainer>
      <MobileMenuToggle onClick={toggleMobileMenu}>
        <FaBars size={32} color={"#ccc"} />
      </MobileMenuToggle>
      {isMobileMenuOpen && (
        <MobileMenu>
          <MenuList>
            <MenuItem>
              <Link href="/mint">Mint now!</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/">Journal</Link>
            </MenuItem>
          </MenuList>
        </MobileMenu>
      )}
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

const Logo = styled(Image)`
  margin-top: 16px;
  margin-left: 16px;
`;

const SnsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  @media (max-width: 480px) {
    margin-left: 8px;
  }
`;

const Sns = styled.div`
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
  @media (max-width: 480px) {
    margin-left: 8px;
    margin-right: 8px;
  }
`;

const MobileMenuToggle = styled.div`
  display: none;
  background: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 16px;
    cursor: pointer;
    z-index: 100;
  }
`;

const PcMenu = styled.div`
  display: flex;
  margin-top: 16px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  background: #000;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 64px;
    right: 0;
    width: 100%;
    height: 100vh;
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  height: 100%;
`;

const MenuItem = styled.li`
  font-size: 24px;
  cursor: pointer;
  list-style: none;
  margin: 16px;
`;

export default CommonHeader;
