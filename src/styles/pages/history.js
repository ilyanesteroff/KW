import styled from 'styled-components'


const Container = styled.div`
  p{
    margin-top: 1rem;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  ul{
    margin: .5rem;
  }
  li{
    margin-top: 1rem;
    font-size: 1.2rem;
    line-height: 1.2rem;
    font-family: Roboto Condensed, sans-serif;
    color: #336;
  }
  @media only screen and (max-width: 750px){
    h2{
      font-size: 1.4rem;
    }
    p{
      font-size: 1rem;
      line-height: 1.4rem;
    }
    ul{
      margin: .5rem 0;
    }
    li{
      font-size: .9rem;
    }
  }
`

export default Container