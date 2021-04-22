import styled from 'styled-components'


const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  padding: 5vh 0;
  height: auto;
  text-align: center;

  svg{
    font-size: 3rem;
    color: #886611;
    margin: 5%;
  }
  h2{
    font-size: 1.2rem;
    color: #111177;
    font-family: Ubuntu, sans-serif;
    margin-bottom: 1rem;
  }
  p{
    font-size: 1rem;
    color: #111155;
    font-family: Oxygen, sans-serif;
  }
  .service{
    padding: .5rem;
    width: 25%;
  }

  @media only screen and (max-width: 750px){
    display: block;
    text-align: left;
    
    .service{
      width: auto;
      margin-top: .5rem;
    }
    a{
      display: flex;
      align-items: center;
    }
    svg{
      margin: 0;
      margin-right: 1rem;
      font-size: 2.2rem;
      min-width: 2.5rem;
    }
  }

  @media only screen and (max-width: 1000px){
    margin-top: 1rem;
    p{
      display: none;
    }
    svg{
      font-size: 1.9rem;
    }
  }
`

export default Container