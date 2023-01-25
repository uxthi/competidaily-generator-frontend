import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    background: '#333399';
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: gilroymedium, sans-serif;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
  }

  h1 {
    font-size: 1.25rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default GlobalStyle;
