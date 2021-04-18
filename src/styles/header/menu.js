import styled from 'styled-components'


const Container = styled.div`
  position: absolute;
  top: 0;
  transition: right .5s;
  right: ${ props => props.opened ? '0' : '-100%' };
  height: 100%;
  min-height: 300px;
  width: 30%;
  min-width: 250px;
  background-color: #2255aadd;
  display: flex;
  align-items: center;
  box-shadow: 0 0 .2rem #fff;
  z-index: 2;
   
  div{
    width: 100%;
  }
  a, #search-control{
    display: block;
    text-align: center;
    font-family: Ubuntu, sans-serif;
    padding: 1.5rem;
    color: #fff;
    font-size: 1.3rem;
    transition: background-color .5s;
  }
  a:hover, #search-control:hover{
    background-color: #2255aadd;
  }
  @media only screen and (min-width: 1100px){
    display: none;
  } 
`

export default Container