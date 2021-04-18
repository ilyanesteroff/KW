import styled from 'styled-components'


const Container = styled.div`
  padding-top: .5rem;
  background-color: #33aaff88;

  h2{
    text-align: center;
    color: #338;
  }
  span{
    margin-right: 1rem;
  }
  svg{
    color: ${ props => props.iconColor };
    font-size: 2rem;
  }
  @media only screen and (max-width: 900px){
    svg{
      font-size: 1.5rem;
    }
  }
`

export default Container