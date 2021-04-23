import styled from 'styled-components'


const Container = styled.div`
  position: relative;
  box-shadow: inset 0 0 40vh black, inset 0 0 40vh black;
  background-position: center;
  background-size: cover;
  background-image: ${ props => props.imageUrl };
  height: 75vh;
  min-height: 500px;
  overflow: hidden;

  #lowest-header{
    align-items: center;
    position: absolute;
    width: 100%;
    bottom: 0; left: 0;
  }

  @media only screen and (min-height: 950px){
    height: 70vh; 
  }
`

export default Container