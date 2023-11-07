import Head from "next/head";

function PagesMetaHead({ title, keywords, description }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta name="author" content="Jędrzej Kosakowski" />
      <meta name="robots" content="index, follow" />
      <meta name="lang" content="en" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Portfolio project" />
      <meta property="og:locale" content="en" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

PagesMetaHead.defaultProps = {
  title: "Portfolio project",
  keywords: "next.js, react, tailwindcss",
  keywords: "Simple and multi-page next.js and react application",
};

export default PagesMetaHead;
