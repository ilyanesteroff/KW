import styled from 'styled-components'


const Intro = styled.div`
  h2{
    color: #222255;
    font-family: Ubuntu, sans-serif;
    margin: 2.5rem;
    margin-left: 0;
    font-size: 1.8rem;
  }
  p{
    color: #111133;
    font-family: Josefin Sans, sans-serif;
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 750px){
    h2{
      margin: 2rem;
      margin-left: 0;
      font-size: 1.3rem;
    }
    p{
      font-size: 1.2rem;
    }
  }
`

export default Intro