import { css } from "@storybook/theming";

export const base = css`
  button,
  input,
  textarea,
  select {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Default type layout */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 28px;
    line-height: 1;
  }
  h2 {
    font-size: 24px;
    line-height: 1;
  }
  h3 {
    font-size: 20px;
    line-height: 1;
  }
  h4 {
    font-size: 16px;
    line-height: 24px;
  }
  h5 {
  }
  h6 {
  }

  p {
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b {
    font-weight: 700;
  }

  em {
    font-style: italic;
  }

  hr {
    border: none;
    border-top: 1px solid #eee;
    clear: both;
    margin-bottom: 1.25rem;
  }

  pre {
    padding: 1em 1.25em;
    border-radius: 4px;
  }
`;
