import Head from "next/head";
import styled from "styled-components";
import CommonHeader from "./components/CommonHeader";
import type { NextPage } from "next";
import CommonFooter from "./components/CommonFooter";
import CosmicTheta from "./components/CosmicTheta";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Cosmictheta</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <CommonHeader />
        <Hr />

        <CosmicTheta />

        <Hr />

        <SubContainer>
          <SubTitle>What is "CosmicΘ"?</SubTitle>
          <TextWrapper>
            <Text>-Web3 NFT MUSIC LABEL。</Text>
            <Text>-様々な風味の真理を旅する銀河。</Text>
            <Text>-UPDATE型ALBUM。</Text>
            <Text>-人々をより高い次元へと誘うSPOT</Text>
            <Text>
              -CosmicΘ is a record label which exists as a Galaxy that you
              cantravel various flavor of the Truth.
            </Text>
          </TextWrapper>
        </SubContainer>

        <Hr />

        <SubContainer>
          <SubTitle>Our Mission</SubTitle>
          <TextWrapper>
            <Text>Underground Music CultureのDX化。</Text>
            <Text>(陽の目を浴びにくいが後世に残すべきものの最適化)</Text>
            <Text>
              1000年前の過去 1000年先の未来 そして今現在に残すメッセージ
            </Text>
          </TextWrapper>
        </SubContainer>

        <Hr />

        <SubContainer>
          <SubTitle>Our Vision</SubTitle>
          <TextWrapper>
            <Text>
              過去未来現在、不変の真理・真言を存在として残して次世代に伝え、音楽のちからで人々をより高い次元へと誘う。
            </Text>
            <Text>-みんなでつくる銀河</Text>
            <Text>-NFT holderは会議に参加可能</Text>
            <Text>たとえば惑星の名前など</Text>
          </TextWrapper>
        </SubContainer>

        <Hr />
      </main>

      <CommonFooter />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  min-height: 100vh;
  color: #fff;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  color: #fff;
  margin-top: 16px;
`;

const SubTitle = styled.h2`
  margin: 0;
  margin-top: 1rem;
  margin-left: 1rem;
  line-height: 1.5;
  text-align: left;
  font-size: 32px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 0 2rem;
  white-space: pre-wrap;
  break-word: break-all;
`;

const Text = styled.p`
  margin-top: 2rem;
  line-height: 1.5;
  text-indent: 1em;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Hr = styled.hr`
  margin-top: 32px;
  margin-bottom: 32px;
  border-width: 0 0 1px;
  border-image: linear-gradient(
      90deg,
      hsla(0, 0%, 35%, 0),
      hsla(0, 0%, 35%, 0.5) 50%,
      hsla(0, 0%, 35%, 0) 100%
    )
    0 0 100%;
  border-style: solid;
`;
