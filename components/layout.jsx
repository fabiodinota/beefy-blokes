import React from "react";
import Mark from "./layout/mark";
import Head from "next/head";
import NavBar from "./layout/navbar";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>Beefy Blokes - {title}</title>
        <meta charSet="utf-8" />
        <meta name="referrer" content="origin" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sniglet:wght@400;800&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/images/beefy-logo.jpg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/beefy-logo.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/beefy-logo.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/beefy-logo.jpg"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Beefy Blokes is a community of NFT collectors and creators."
        />
        <meta content="#73d8f9" data-react-helmet="true" name="theme-color" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beefy-blokes.vercel.app/" />
        <meta property="og:title" content="Beefy Blokes - Home" />
        <meta property="og:description" content="Beefy Blokes is a community of NFT collectors and creators." />
        <meta property="og:image" content="https://imgur.com/a/69bNhcd" />

        <meta property="og:image" content="https://imgur.com/a/69bNhcd" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://beefy-blokes.vercel.app/" />
        <meta property="twitter:title" content="Beefy Blokes - Home" />
        <meta property="twitter:description" content="Beefy Blokes is a community of NFT collectors and creators." />
        <meta property="twitter:image" content="https://imgur.com/a/69bNhcd" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="pt-40">{children}</main>
      <footer>
        <Mark />
      </footer>
    </div>
  );
};

export default Layout;
