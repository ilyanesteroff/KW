import styled from 'styled-components'


const Container = styled.div`
  width: 40vw;
  min-width: 270px;
  height: 50vh;
  min-height: 200px;
  padding: 1rem;
  background-color: #44ddff88;
  border-radius: 1rem;
  box-shadow: 0 0 .3rem #111;
  overflow: hidden;

  input{
    padding: .7rem 1rem;
    border-radius: 2rem;
    border: none;
    font-size: 1.1rem;
    font-family: Roboto Condensed, sans-serif;
    color: #333;
    width: 100%;
    transition: all .2s;
    background-color: #eee;
  }
  input:focus{
    outline: none;
    box-shadow: 0 0 .1rem #111;
    background-color: #fff;
  }
  #results{
    margin-top: 1rem;
    overflow-y: scroll; 
    position: relative;
    height: 70%;
  }
  h3{
    text-align: center;
    margin: 1rem;
    font-size: 1.2rem;
    font-family: Abel, sans-serif;
    color: #444;
  }
  a{
    display: block;
    width: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    color: #222;
    font-family: Ubuntu, sans-serif;
    border-top: solid 1px #888;
    transition: all .5s;
  }
  a:hover{
    background-color: #44ddff88
  }
`

export default Container 