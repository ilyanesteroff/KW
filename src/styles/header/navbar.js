import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: ${ props =>  props.bgColor ? '#3377ff77' : 'transparent'  };
  box-shadow: 0 0 .2rem ${ props =>  props.bgColor ? '#222' : 'transparent'  };

  #image-label{
    display: flex;
    align-items: center;
  }
  .logo-image{
    width: 5rem;
    margin-right: 1rem;
  }
  .logo-label{
    color: #fff;
    font-family: Nunito, sans-serif;
    font-size: 1.4rem;
  }
  #navigation{
    display: flex;
    align-items: center;
    margin-top: .6rem;
  }
  #link {
    color: #fff;
    font-family: Ubuntu, sans-serif;
    margin: 0 4rem;
    cursor: pointer;
    padding-bottom: .3rem;
    transition: border 1s;
    border-bottom: 2px solid transparent;
    font-size: 1.2rem;
  }
  #link:hover {
    border-bottom-color: #eeeeee;
  }

  @media only screen and (max-width: 800px){
    padding: .8rem 1.2rem;
    .logo-image{
      width: 3rem;
      margin-right: .8rem;
    }
    .logo-label{
      font-size: 1.2rem;
    }
  }
  @media only screen and (max-width: 1100px){
    #navigation{
      display: none;
    }
  }
`

export default Container