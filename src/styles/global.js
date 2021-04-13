import { createGlobalStyle } from 'styled-components'


const global = createGlobalStyle`
  html, body {
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  li{
    display: inline-block;
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default global