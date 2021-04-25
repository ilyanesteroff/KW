import styled from 'styled-components'


const Container = styled.div`
  img{
    margin: 2rem 25%;
    width: 50%;
    border-radius: .5rem;
    border: solid 1px #1155ff;
  }
  
  @media only screen and (max-width: 900px){
    img{
      margin: 1rem 0;
      width: 100%;
    }
  }
`

export default Container