import styled from 'styled-components'


const Container = styled.div`
  #mobile-container, #normal-container{
    width: 100%;
    height: 100%;
    position: relative;
  }
  #normal-container{
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img{
    max-height: 100%;
    max-width: 50%;
    border-radius: .5rem;
    border: solid 1px #333;
  }
  h2{
    color: #adf;
    font-size: 1.3rem;
  }
  #normal-description, #mobile-description{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  #normal-description{
    background-color: ${ props => props.color };
    width: 40%;
    margin: 1rem;
    border-radius: .5rem;
    box-shadow: 0 0 .2rem #333;
  }
  #mobile-container::before{
    background-image: ${ props => props.url };
  }
  #mobile-description{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    min-width: 200px;
    height: 50%;
    border-top-left-radius: .5rem;
    opacity: .5;
    background-color: ${ props => props.color };
  }
  @media only screen and (max-width: 750px){
    #normal-container{
      padding: 1.75rem;
    }
    img{
      max-height: 60%;
      max-width: calc(60% - 2rem);
    }
    h2{
      font-size: 1rem;
    }
    #normal-description{
      margin: 1rem;
      padding: 1rem;
    }
  }
`

export default Container