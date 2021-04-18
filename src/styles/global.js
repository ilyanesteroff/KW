import { createGlobalStyle } from 'styled-components'


const global = createGlobalStyle`
  html, body {
    margin: 0;
    box-sizing: border-box;
    height: 100%;
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
  .no-scroll{
    overflow: hidden;
  }
  .invisible{
    display: none;
  }
  .icon-label{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
  }
  .icon-label svg {
    margin-right: .6rem;
    color: #ffff11;
    font-size: 1.5rem;
  }
  .icon-label h3{
    font-size: 1rem;
    color: #eee;
    font-weight: 500;
    font-family: 'Roboto Condensed', sans-serif;
  }
  #flex{
    display: flex;
  }
  .above-footer {
    text-align: center;
    font-family: Ubuntu, sans-serif;
    font-size: 1.5rem;
    color: #111166;
    margin: 3rem;
  }
  @media only screen and (max-width: 1100px){
    #search-top, #lowest-header{
      display: none;
    }
  }
  @media only screen and (max-width: 900px){
    .icon-label h3{
      display: none;
    }
    .icon-label {
      margin: 0 .3rem;
    }
    .above-footer {
      font-size: 1.2rem;
      margin: 1.5rem;
    }
  }
`

export default global