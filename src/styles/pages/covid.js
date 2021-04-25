import styled from 'styled-components'


const Container = styled.div`
  h2{
    margin-bottom: 3rem;
  }
  h3{
    text-align: center;
    margin: 1rem;
    padding-top: 1.5rem;
    font-size: 1.7rem;
    font-family: Roboto Condensed, sans-serif;
    font-weight: 300;
    color: #1166dd;
  }
  p{
    text-align: left;
    padding: 0 1rem;
    color: #222;
    font-size: 1.2rem;
  }
  a{
    color: #333;
  }
  #table-section{
    margin: 1.5rem 0;
    background-color: #bbf;
    box-shadow: 0 0 10px;
  }
  #ps{
    color: #444;
    font-family: Oxygen, sans-serif;
    color: #111133;
    font-size: 1.2rem;
    margin-top: 1.5rem;
  }
  #flat-table{
    display: none;
  }
  @media only screen and (max-width: 1000px){
    #flat-table{
      display: table;
    }
    #wide-table{
      display: none;
    }
  }
  @media only screen and (max-width: 750px){
    h3{
      font-size: 1.4rem;
    }
    p{
      font-size: 1rem;
    }
    #ps{
      font-size: 1rem;
      margin-top: 1.3rem;
    }
  }
`

export default Container