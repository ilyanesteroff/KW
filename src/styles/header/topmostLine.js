import styled from 'styled-components'


const Container = styled.div`
  background: linear-gradient(#3322aa, #110044);
  padding: .8rem .2rem;
  position: relative;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
 
  .icon-label{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
  }
  svg {
    margin-right: .6rem;
    color: #ffff11;
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1rem;
    color: #eee;
    font-weight: 500;
    font-family: 'Roboto Condensed', sans-serif;
    display: inline;
  }
  #links, #min-width-1100{
    display: flex;
  }
  @media only screen and (min-width: 1100px){
    #min-width-1100{
      display: none;
    }
  }
  @media only screen and (max-width: 900px){
    justify-content: flex-end;
    padding: .5rem .2rem;
    #time, h3{
      display: none;
    }
    .icon-label {
      margin: 0 .3rem;
    }
  }
`


export default Container