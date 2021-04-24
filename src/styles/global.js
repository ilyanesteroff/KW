import { createGlobalStyle } from 'styled-components'


const global = createGlobalStyle`
  ::-webkit-scrollbar { 
    display: none; 
  }
  html, body {
    margin: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
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
  h2{
    color: #222255;
    font-family: Ubuntu, sans-serif;
    font-size: 1.8rem;
  }
  p{
    font-weight: 600;
    color: #111133;
    font-family: Josefin Sans, sans-serif;
  }
  th{
    /* padding: 1rem;
    font-size: 0.9rem; */
    border: solid 2px #444;
    padding: .9rem .4rem;
    background-color: #113377;
    color: #ddd;
    text-align: center;
    font-size: 1.1rem;
  }
  td{
    /* padding: 1rem;
    font-size: 0.7rem; */
    border: solid 2px #444;
    background-color: #33aaff;
    padding: .9rem .3rem;
    font-size: 1rem;
    font-weight: 700;
    min-width: 10vw;
    text-align: center;
    transition: all 1s;
  }
  table{
    border-collapse: collapse;
    font-family: 'Ubuntu', sans-serif;
    width: 100%;
    text-align: center;
    margin-top: 2rem;
    table-layout: fixed;
    word-wrap: break-word;
  }
  .no-scroll{
    overflow: hidden;
  }
  .invisible{
    display: none;
  }
  .section{
    margin-left: 10%;
    width: 80%;
    position: relative;
    margin-top: 3rem;
  }
  .table{
    text-align: center;
  }
  .icon-label{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
    cursor: pointer
  }
  
  .icon-label svg {
    margin-right: .6rem;
    color: #e3e3e3;
    font-size: 1rem;
  }
  .icon-label h3{
    font-size: 0.9rem;
    color: #e3e3e3;
    font-weight: 500;
    font-family: 'Roboto Condensed', sans-serif;
  }
  .page-container {
    position: relative;
    margin-top: 5rem;
    margin-left: 10%;
    width: 80%;
  }
  #flex{
    display: flex;
  }
  .slider-container{
    width: 100%;
    height: 100%;
  }
  .above-footer {
    text-align: center;
    font-family: Ubuntu, sans-serif;
    font-size: 1.5rem;
    color: #111166;
    margin: 3rem;
  }
  .with-before::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0; left: 0;
    background-position: center;
    background-size: cover;
  }
  .introduction h2{
    color: #222255;
    font-family: Ubuntu, sans-serif;
    margin: 2.5rem;
    margin-left: 0;
    font-size: 1.8rem;
  }
  .introduction p{
    color: #111133;
    font-family: Josefin Sans, sans-serif;
    font-size: 1.4rem;
  }
  .introduction a {
    font-family: Roboto Condensed, sans-serif;
    display: block;
    color: #113355;
    margin-top: 1rem; 
    font-size: 1.2rem;
  }

  #search-top {
    display: flex;
    align-items: center;
    gap: 5px;
    background: #ffffff;
    width: 300px;
    border-radius: 50px;
    padding: 2px 10px;
    cursor: pointer;
    margin: 0 1rem;
  }

  #search-top svg {
    color: #616161;
  }

  @media only screen and (max-width: 750px){
    .introduction h2 {
      margin: 2rem;
      margin-left: 0;
      font-size: 1.3rem;
    }
    .introduction p {
      font-size: 1.2rem;
    }
    .introduction {
      font-size: 1rem;
      margin-top: .8rem;
    }
  }
  @media only screen and (max-width: 1100px){
    #search-top, #lowest-header{
      display: none;
    }
  }
  @media only screen and (max-width: 1000px){
    .section {
      margin-left: 5%;
      width: 90%;
    }
    .page-container {
      margin-top: 3rem;
      margin-left: 5%;
      width: 90%;
    }
    h2{
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 900px){
    .icon-label h3{
      display: none;
    }
    .icon-label {
      margin: 0 .3rem;
    }
    .icon-label svg{
      font-size: 1.3rem
    }
    .above-footer {
      font-size: 1.2rem;
      margin: 1.5rem;
    }
    table{
      margin-top: 1.5rem;
    }
    th{
      padding: 1rem;
      font-size: 0.9rem; 
    }
    td{
      padding: 1rem;
      font-size: 0.8rem; 
    }
  }
`

export default global