import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keyword" content="harshal.social, harshal, harshalflix, harshal social, HarshalFlix" />
        <meta name="publisher" content="HarshalFlix" />
        <meta name="description" content="harshal.social is The Best Movie & WebSeries Download Website." />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <meta name="page-topic" content="Media" />
        <meta name="audience" content="Everyone" />
        <title>HarshalFlix</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossOrigin="anonymous"></Script>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PQ3G1FJTQQ"></Script>
        <Script>
          window.dataLayer = window.dataLayer || [];
          function gtag() {dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-PQ3G1FJTQQ');
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
