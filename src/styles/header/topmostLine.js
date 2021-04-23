import styled from 'styled-components'


const Container = styled.div`
  background: #110044;
  padding: .8rem .2rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 2;
 
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
    #time{
      display: none;
    }
  }
`


export default Container