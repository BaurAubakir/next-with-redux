import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <link rel='shortcut icon' href='/static/favicon.ico' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#fff' />
          <meta name='description' content='' />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css'
          />
          <link
            rel='stylesheet'
            href='/static/libs/bootstrap/bootstrap.min.css'
          />
          <link rel='stylesheet' href='/static/libs/animatecss/animate.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src='/static/libs/babel-polyfill/polyfill.min.js'></script>
          <script src='/static/libs/jquery/jquery.slim.min.js'></script>
          <script src='/static/libs/popper/popper.min.js'></script>
          <script src='/static/libs/bootstrap/bootstrap.min.js'></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
