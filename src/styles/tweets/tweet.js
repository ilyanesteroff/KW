import styled from 'styled-components'


const Container = styled.div`
  width: 49%;
  border-radius: .7rem;
  margin: .2rem 0;
  padding: 1rem;
  background-color: #fff;
  border: solid 1px #bbb;
  transition: background-color 0.5s;

  img{
    text-indent: -9999px;
  }
  img#media{
    max-width: 100%;
    border-radius: .5rem;
    border: solid 1px #333;
    margin-top: .5rem;
  }
  #upper-section{
    position: relative;
    background-color: ${ props => props.bgColor }55;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-radius: .3rem;
    padding: .3rem;
    border: solid 1px #333;
    margin-bottom: 1rem;
    min-height: calc(50px + .3rem);
  }
  #avatar-pic{
    border-radius: 50%;
    margin: .2rem;
    width: 50px;
    height: 50px;
  }
  #tweet-url {
    margin-right: .8rem;
  }
  #tweet-body p{
    color: #111;
    margin: .5rem 0;
    font-family: Oxygen;
    font-weight: 500;
    font-size: 1.2rem;
    padding-right: 5%;
    word-wrap: wrap;
  }
  #heart {
    color: #888;
    font-size: 1.2rem;
    transition: all 0.5s;
  }
  #upper-section h4 {
    font-family: Ubuntu;
    color: #111;
  }
  #twitter-icon {
    color: #4eb5ff;
    font-size: 2rem;
    margin-right: .5rem;
  }
  #verified {
    color: #fff;
    background-color: #33aaff;
    border-radius: 50%;
    margin-right: .5rem;
  }
  #created-at {
    color: #888;
    margin: 2% 0;
    font-family: Nunito, sans-serif;
    font-weight: 500;
    font-size: 1rem;
    padding-bottom: 2%;
    border-bottom: solid #bbb 1px;
  }
  #hashtags{
    margin: .5rem 0;
  }
  #hashtags a{
    color: #2196F3;
    font-family: Oxygen, sans-serif;
    font-weight: 600;
    margin-right: .5rem;
  }
  #controls{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #controls div{
    display: flex;
  }
  .InfoLink {
    padding: 1%;
    border-radius: 2vh;
    transition: all 0.5s;
    float: right;
    clear: both;
  }
  #comment svg {
    color: #888;
    font-size: 1.2rem;
    margin-right: .5rem;
    transition: all 0.5s;
  }
  #info svg {
    transition: color .5s;
  }
  #comment h3 {
    color: #888;
    display: inline;
    font-family: Nunito, sans-serif;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.5s;
  }
  #comment svg:hover {
    color: #2222ee;
  }
  #info:hover svg {
    color: #12bbbb;
  }
  #heart:hover {
    color: #c22;
  }
  :hover {
    background-color: #effaff;
  }
`

export default Container