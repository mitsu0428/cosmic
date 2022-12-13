import Head from "next/head";
import styled from "styled-components";
import CommonHeader from "./components/CommonHeader";
import type { NextPage } from "next";
import CommonFooter from "./components/CommonFooter";

const Home: NextPage = () => {
  return (
    <BasicContainer>
      <Head>
        <title>Cosmictheta</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <CommonHeader />
        <BasicSubContainer>
          <BasicSubTitle>What is "CosmicΘ"?</BasicSubTitle>
          <BasicText>-Web3 NFT MUSIC LABEL。</BasicText>
          <BasicText>-様々な風味の真理を旅する銀河。</BasicText>
          <BasicText>-UPDATE型ALBUM。</BasicText>
          <BasicText>-人々をより高い次元へと誘うSPOT</BasicText>
          <BasicText>
            -CosmicΘ is a record label which exists as a Galaxy that you
            cantravel various flavor of the Truth.
          </BasicText>
        </BasicSubContainer>

        <BasicSubContainer>
          <BasicSubTitle>Our Mission</BasicSubTitle>
          <BasicText>Underground Music CultureのDX化。</BasicText>
          <BasicText>
            (陽の目を浴びにくいが後世に残すべきものの最適化)
          </BasicText>
          <BasicText>
            1000年前の過去 1000年先の未来 そして今現在に残すメッセージ
          </BasicText>
        </BasicSubContainer>

        <BasicSubContainer>
          <BasicSubTitle>Our Vision</BasicSubTitle>
          <BasicText>
            過去未来現在、不変の真理・真言を存在として残して次世代に伝え、音楽のちからで人々をより高い次元へと誘う。
          </BasicText>
          <BasicText>-みんなでつくる銀河</BasicText>
          <BasicText>-NFT holderは会議に参加可能</BasicText>
          <BasicText>たとえば惑星の名前など</BasicText>
        </BasicSubContainer>
      </main>

      <CommonFooter />
    </BasicContainer>
  );
};

export default Home;

const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 0.5rem;
  font-size: calc(10px + 2vmin);
  color: #fff;
  background: #282c34;
`;

const BasicSubContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 0 0.5rem;
  font-size: calc(10px + 2vmin);
  color: #fff;
  background: #282c34;
`;

const BasicSubTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 1.15;
  text-align: center;
`;

const BasicText = styled.p`
  font-size: 1.3rem;
  margin: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 1.15;
  text-align: left;
  padding: 0 1rem;
`;
