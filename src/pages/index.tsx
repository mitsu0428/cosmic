import Head from "next/head";
import styles from "../styles/Home.module.css";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cosmictheta</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>CosmicΘ</h1>

        <div className={styles.grid}>
          <h2 className={styles.description}>What is "CosmicΘ"?</h2>
          <div>
            <p>-Web3 NFT MUSIC LABEL。</p>
            <p>-様々な風味の真理を旅する銀河。</p>
            <p>-UPDATE型ALBUM。</p>
            <p>-人々をより高い次元へと誘うSPOT</p>
            <p>
              -CosmicΘ is a record label which exists as a Galaxy that you can
              travel various flavor of the Truth.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          <h2 className={styles.description}>Our Mission</h2>
          <div>
            <p>Underground Music CultureのDX化。</p>
            <p>(陽の目を浴びにくいが後世に残すべきものの最適化)</p>
            <p>1000年前の過去 1000年先の未来 そして今現在に残すメッセージ</p>
          </div>
        </div>

        <div className={styles.grid}>
          <h2 className={styles.description}>Our Vision</h2>
          <div>
            <p>
              過去未来現在、不変の真理・真言を存在として残して次世代に伝え、音楽のちからで人々をより高い次元へと誘う。
            </p>
            <p>-みんなでつくる銀河</p>
            <p>-NFT holderは会議に参加可能</p>
            <p>たとえば惑星の名前など</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>cosmic theta</footer>
    </div>
  );
};

export default Home;
