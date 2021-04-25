import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  width: 100%; height: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  
  img{
    max-width: 60%;
    max-height: 90%;
    margin: 1rem;
  }
  p{
    width: 40%;
    padding: 1rem;
    margin: 1rem;
    text-align: center;
    color: ${ props => props.color };
    border: solid 1px ${ props => props.color };
    border-radius: .5rem;
  }
  @media only screen and (max-width: 1000px){
    padding: 0;
    
    img{
      max-width: 50%;
      max-height: 100%;
      margin: 0;
    }
    p{
      width: 50%;
      padding: 1rem;
      margin: 2rem;
      text-align: center;
      border-radius: .5rem;
    }
  }
  @media only screen and (max-width: 500px){
    display: block;

    img{
      max-width: 100%;
      max-height: 75%;
      margin: 0;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: .5rem;
    }
    p{
      width: 100%;
      padding: 1rem;
      margin: 0;
      border: none;
      text-align: center;
      border-radius: .5rem;
    }
  }
`

export default Container