import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img{
    max-height: 100%;
    width: 60%;
    border-top: solid 1px #333; border-bottom: solid 1px #333;
  }
  #description{
    height: 100%;
    width: 40%;
    padding: 1rem;
    background-color: #3399ff66;
    border-left: solid 1px #333;
    display: flex;
    align-items: center;
  }
  #description h3{
    margin: 1rem 0;
    font-size: 1.2rem;
    color: #123;
    font-family: Abel, sans-serif;
  }
  #description p{
    margin: 1rem 0;
    font-size: 1rem;
    color: #111;
    font-family: Roboto Condensed, sans-serif;
    font-weight: 300;
  }
  #description a{
    color: #555;
    font-weight: 300;
    font-size: Ubuntu, sans-serif;
  }
`

export default Container
