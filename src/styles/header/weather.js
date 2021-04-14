import styled from 'styled-components'


const Container = styled.div`
  padding: .5rem 1rem;
  overflow: hidden;
  border-radius: 1rem;
  backdrop-filter: blur(1px);

  svg{
    margin: .5rem;
    font-size: 2rem;
    color: ${ props => props.svgColor }
  }
  h3{
    font-size: 1.3rem;
    font-family: Roboto Condensed, sans-serif;
  }
  h4{
    font-size: 1.1rem;
    font-family: Abel, sans-serif;
  }
  .forecast-section{
    color: #fff;
    border-right: solid 2px #fafafa;
    padding: .3rem .7rem;
  }
  .forecast-section:last-child{
    border-right: none;
  }
`

export default Container