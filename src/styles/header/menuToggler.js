import styled from 'styled-components'


const Container = styled.div`
  position: relative;
  width: 1.3rem;
  margin-top: 1.1rem;
  padding: 1rem;
  z-index: 5; 
  
  div{
    width: 1.1rem;
    height: 2px;
    background-color: #fff; 
  }
  #top, #middle, #bottom{
    position: absolute;
    transition: all .3s; 
  }
  #top{
    left: 0; top: 0;
  }
  #middle{
    left: 0; top: .4rem;
  }
  #bottom{
    left: 0; top: .8rem;
  }
  #middle{
    opacity: ${ props => props.opened ? 0 : 1 }; 
    width: ${ props => props.opened ? 0 : 1.1 }rem;
    margin-left: ${ props => props.opened ? '50%' : 0 };
  } 
  #bottom, #top{
    top: ${ props => props.opened && '.3rem' };
  }
  #top{
    transform: ${ props => props.opened && 'rotate(45deg)' };
  }
  #bottom{
    transform: ${ props => props.opened && 'rotate(-45deg)' };
  }
  @media only screen and (min-width: 1100px){
    display: none;
  } 
`

export default Container