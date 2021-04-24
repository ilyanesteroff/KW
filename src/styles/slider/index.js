import styled from 'styled-components'


const Container = styled.div`
  margin: 2rem 0;
  position: relative;
  width: 100%;
  height: 50vh;
  min-height: 500px;
  overflow: hidden;
  border: solid 1px #333;
  border-radius: .5rem;

  #ribbon{
    display: flex;
    height: 100%;
    transition: transform ${ props => props.transitionTime }s;
    transform: translateX(${ props => props.translateX * 100 }%);
  }
  #slide{
    width: 100%;
    height: 100%;
    flex-shrink: 0;
  }
  #bars{
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    height: 2rem;
    width: 100%;
    z-index: 2;
  }
  .bar{
    width: 1rem;
    height: 1rem;
    background-color: #eef;
    margin: .25rem;
    border-radius: .5rem;
    border: solid 1px #333;
  }
  #active{
    background-color: #17f;
  }
  svg{
    position: absolute;
    top: calc(50% - .75rem);
    font-size: 1.5rem;
    color: #19f;
    opacity: .2;
    transition: opacity .5s;
  }
  .right{
    right: .5rem;
  }
  .left {
    left: .5rem;
  }
  svg:hover{
    opacity: 1;
  }
  @media only screen and (max-width: 650px){
    min-height: 300px;

    svg{
      top: calc(50% - .5rem);
      font-size: 1rem;
      opacity: 1;
    }
    #bars{
      height: 1.5rem;
    }
    .right{
      right: .5rem;
    }
    .left {
      left: .5rem;
    }
    .bar{
      width: .75rem;
      height: .75rem;
      margin: .1rem;
    }
  }
`

export default Container