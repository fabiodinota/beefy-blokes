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
          content="Beyond Vision LTD is an influencer marketing and management agency based out of the United
         Kingdom, but not limited to working inside of the United Kingdom as the agency works with various influencers & companies of
          all different calibers all around the globe."
        />
        <meta content="#FFF46D" data-react-helmet="true" name="theme-color" />
        <meta property="og:url" content="https://www.beyondvisionltd.org" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Beyond Vision LTD" />
        <meta
          property="og:description"
          content="Beyond Vision LTD is an influencer marketing and management agency based out of the United
         Kingdom, but not limited to working inside of the United Kingdom as the agency works with various influencers & companies of
          all different calibers all around the globe."
        />
        <meta property="og:image" content="https://i.imgur.com/Gd1N9JI.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="www.beyondvisionltd.org" />
        <meta
          property="twitter:url"
          content="https://www.beyondvisionltd.org"
        />
        <meta name="twitter:title" content="Beyond Vision LTD" />
        <meta
          name="twitter:description"
          content="Beyond Vision LTD is an influencer marketing and management agency based out of the United
         Kingdom, but not limited to working inside of the United Kingdom as the agency works with various influencers & companies of
          all different calibers all around the globe."
        />
        <meta name="twitter:image" content="https://i.imgur.com/Gd1N9JI.jpg" />
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
