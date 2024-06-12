import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
        font-family: 'Pretendard';
        font-weight: 300;
        font-style: normal;
        src: url('/fonts/PretendardLight.ttf') format('ttf'),
             url('/fonts/PretendardLight.woff2') format('woff2');
  }

  @font-face {
        font-family: 'Pretendard';
        font-weight: 400;
        font-style: normal;
        src: url('/fonts/PretendardMedium.ttf') format('ttf'),
             url('/fonts/PretendardMedium.woff2') format('woff2');
  }

  @font-face {
        font-family: 'Pretendard';
        font-weight: 700;
        font-style: normal;
        src: url('/fonts/PretendardBold.ttf') format('ttf'),
             url('/fonts/PretendardBold.woff2') format('woff2');
  }

  * {
    box-sizing: border-box;
  }

  body, html {
    overflow-x: hidden;
    font-family: 'Pretendard';

    // android 환경 클릭 시 highlight 제거
    outline: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  @media (min-width: 1201px) {
    html {
      font-size: 10px;
    }
  }

  @media screen and (max-width: 1200px) {
    html {
      font-size: 0.833vw;
    }
  }

  @media (max-width: 500px) {
    html {
      font-size: 2vw;
    }
  }

  html[data-theme="dark"] {
    background-color: #000;
    color: #fff;
  }

  html[data-theme="light"] {
    background-color: #fff;
    color: #000;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
`;

export default GlobalStyle;
