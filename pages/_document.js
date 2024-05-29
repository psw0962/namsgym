import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* 파비콘 */}
          <link rel="shortcut icon" href="/favicon.ico" />

          {/* 홈페이지 */}
          <meta name="author" content="namsgym" />
          <meta
            name="keywords"
            content="남스짐, namsgym, health, fitness, gym, pt, PT, personal training, weight training, 헬스장, 헬스클럽, 피티샵, PT샵, 피티전문"
          />
          <meta
            name="description"
            content="남다른 몸, 남다른 삶 남스짐에서 시작하세요."
          />

          {/* 오픈 그래프 */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="namsgym | 남스짐" />
          <meta
            property="og:description"
            content="남다른 몸, 남다른 삶 남스짐에서 시작하세요."
          />
          <meta property="og:site_name" content="namsgym | 남스짐" />
          <meta property="og:image" content="" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:url" content="https://www.namsgym.com/" />

          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="315" />

          {/* 트위터용 */}
          <meta name="twitter:card" content="website" />
          <meta name="twitter:title" content="namsgym | 남스짐" />
          <meta
            name="twitter:description"
            content="남다른 몸, 남다른 삶 남스짐에서 시작하세요."
          />
          <meta name="twitter:image" content="" />

          {/* 네이버 검색엔진 */}
          <meta
            name="naver-site-verification"
            content="ba25ba00b30c985846a42b4d115ba32ae505c4ff"
          />

          <script
            type="text/javascript"
            src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&libraries=services,clusterer`}
          ></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
