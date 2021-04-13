import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  #image-label{
    display: flex;
    align-items: center;
  }
  .logo-image{
    width: 5rem;
    margin-right: 1rem;
  }
  .logo-label{
    color: #ccf;
    font-family: Nunito, sans-serif;
    font-size: 1.4rem;
  }
  #navigation{
    display: flex;
    align-items: center;
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