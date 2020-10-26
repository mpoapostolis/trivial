import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>omega trivia </title>
          <link rel="manifest" href="/manifest.json" />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-RYKRKCMBJ8"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-RYKRKCMBJ8')
                      `,
            }}
          ></script>

          <link
            rel="icon"
            href="/icon/favicon-16x16-dunplab-manifest-26426.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
