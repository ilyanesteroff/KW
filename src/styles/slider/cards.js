import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;

  img{
    max-width: 60%;
    max-height: 90%;
    margin: 1rem;
    border: solid 1px ${ props => props.color };
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
  @media only screen and (max-width: 750px){
    padding: 0;

    img{
      max-width: 50%;
      max-height: 100%;
      margin: 0;
      border: none;
    }
    p{
      width: 50%;
      padding: 1rem;
      margin: 2rem;
      text-align: center;
      border-radius: .5rem;
    }
  }
`

export default Container