import styled from 'styled-components'


const Container = styled.div`
  h2{
    margin-bottom: 2rem;
  }
  #entry h3{
    font-size: 1.5rem;
    font-family: Oxygen, sans-serif;
    font-weight: 300;
    color: #225;
    margin-bottom: 1rem;
  }
  #entry p{
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  @media only screen and (max-width: 750px){
    h2{
      margin-bottom: 1.3rem;
    }
    #entry h3{
      font-size: 1.4rem;
    } 
    #entry p{
      font-size: 1rem;
      line-height: 1.3rem;
    }
    p{
      font-size: 1rem;
    }
  }
`

export default Container