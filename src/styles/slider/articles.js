import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  img{
    max-height: 100%;
    width: 60%;
    border-top: solid 1px #333; border-bottom: solid 1px #333;
  }
  #normal-description{
    height: 100%;
    width: 40%;
    padding: 1rem;
    background-color: #3399ff66;
    border-left: solid 1px #333;
    display: flex;
    align-items: center;
  }
  h3{
    font-family: Abel, sans-serif;
  }
  #normal-description h3{
    margin: 1rem 0;
    font-size: 1.2rem;
    color: #123;
    text-align: center;
  }
  #normal-description p{
    margin: 1rem 0;
    font-size: 1rem;
    color: #111;
    font-family: Roboto Condensed, sans-serif;
    font-weight: 300;
  }
  a{
    font-weight: 300;
    font-size: Ubuntu, sans-serif;
    display: block;
  }
  #normal-description a{
    color: #555;
  }
  #mobile-container{
    position: relative;
    width: 100%; height: 100%;
  }
  #mobile-container::before{
    background-image: ${props => props.image};
  }
  #mobile-description{
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    background-color: #1155ff55;
    z-index: 1;
    padding: 1rem;
    padding-bottom: 2rem;
  }
  #mobile-description h3{
    font-size: 1rem;
    color: #ddf;
  }
  #mobile-description a{
    color: #ddf;
    margin: .5rem 0;
  }
  p#byline{
    color: #159;
    font-family: Ubuntu, sans-serif;
  }
  @media only screen and (max-width: 750px){
    #normal-description{
      align-items: flex-start;
    }
    #normal-description p{
      display: none;
    }
    #normal-description h3{
      margin: 1rem 0;
      font-size: 1rem;
      text-align: left;
    }
    #normal-description a{
      font-size: .8rem;
    }
  }
`

export default Container
