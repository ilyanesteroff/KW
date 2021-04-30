import styled from 'styled-components'


const Container = styled.div`
  input{
    padding: .5rem 1rem;
    border: none;
    border-radius: 2rem;
    background-color: #eee;
    transition: all .5s;
    font-size: 1rem;
    font-family: Abel, sans-serif;
    min-width: 200px;
  }
  h2{
    color: #33a;
  }
  #tweets{
    margin: 2rem 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  #tweet-container{
    width: calc(50% - .4rem);
  }
  #no-tweets{
    font-family: Nunito, sans-serif;
    font-size: 1.5rem;
    color: #5af;
    margin: 2rem 0;
  }
  #upper{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #tags{
    margin-left: 1rem;
  }
  #tags h3{
    margin-bottom: .7rem;
    font-size: 1.4rem;
    font-family: Roboto Condensed, sans-serif;
    font-weight: 300;
    color: #333;
  }
  #tags a{
    font-size: 1.2rem;
    color: #5af;
    margin-right: 1rem;
    font-family: Ubuntu, sans-serif;
  }
  input:focus{
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 .2rem #5af;
  }
  input::placeholder{
    color: #259;
  }
  @media only screen and (max-width: 850px){
    #tweets{
      display: block;
    }
    #tweet-container{
      width: 100%;
    }
  }
  @media only screen and (max-width: 750px){
    #upper{
      display: block;
    }
    input{
      margin-top: 1rem;
      width: 100%;
    }
    #tags h3{
      margin-bottom: .7rem;
      font-size: 1.2rem;
    }
    #tags a{
      font-size: 1rem;
      margin-right: .8rem;
    }
  }
`

export default Container