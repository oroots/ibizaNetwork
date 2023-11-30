import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <title>Ibiza Roleplay</title>
        <meta name="msapplication-TileColor" content="#B743E4" />
        <meta name="theme-color" content="#B743E4" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@richaardev" />
        <meta content="Ibiza Roleplay" property="og:title" />
        <meta
          name="description"
          content="Uma nova experiência. Servidor de GTA RP com o foco em criar personagens e histórias, focado no jogador. Vem pra Ibiza."
        />
        <meta
          property="og:description"
          content="Uma nova experiência. Servidor de GTA RP com o foco em criar personagens e histórias, focado no jogador. Vem pra Ibiza."
        />
        <meta property="og:url" content="https://ibizaroleplay.com" />
        <meta
          content="https://cdn.discordapp.com/attachments/1016375807066787891/1016428039229423757/ibizafundo.png"
          property="og:image"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
