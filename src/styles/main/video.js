import styled from 'styled-components'


const Container = styled.div`
  position: relative;
  display: flex;
  height: auto;
  background-color: #ccf;
  margin: 3rem 0;
  padding: 2rem;

  .video {
    height: 50vh;
    min-height: 300px;
    width: 100%;
    border: none;
    border-radius: 2vh;
  }
  .description{
    width: 100%;
    padding-right: 5%;
  }
  h2{
    font-size: 2rem;
    font-family: Oxygen, sans-serif;
    color: #111144;
    margin: .5rem;
    font-weight: 400;
  }
  p{
    font-size: 1.5rem;
    font-family: Abel, sans-serif;
    margin: 1%;
    color: #3131a1;
    font-weight: 300;
  }

  @media only screen and (max-width: 800px) {
    display: block;
    
    .description{
      padding-bottom: 5vh;
    }
  }

  @media only screen and (max-width: 567px) {
    .description {
      width: 90%;
    }
    h2{
      font-size: 1.6rem;
    }
    p{
      font-size: 1.3rem;
      font-weight: 500;
    }
  }

  @media only screen and (max-height: 500px){
    .description{
      margin: 0;
      margin-top: 1%;
    }
    h2{
      font-size: 1.4rem;
    }
    p{
      font-size: 1.2rem;
    }
  }

  @media only screen and (min-height: 1000px){
    .video{
      height: 25vh;
    }
    padding: 2vh 2%;
  }
`

export default Container