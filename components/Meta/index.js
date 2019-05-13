import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/images/favicons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/images/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/images/favicons/favicon-16x16.png"
    />
    <link
      rel="mask-icon"
      href="/static/images/favicons/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <link rel="shortcut icon" href="/static/images/favicons/favicon.ico" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta
      name="msapplication-config"
      content="/static/images/favicons/browserconfig.xml"
    />
    <meta name="theme-color" content="#ffffff" />
    <link rel="manifest" href="/static/manifest/manifest.json" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <title>Al.ta Cucina</title>
  </Head>
);

export default Meta;