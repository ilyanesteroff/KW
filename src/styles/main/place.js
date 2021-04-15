import styled from 'styled-components'


const Container = styled.div`
  width: calc(50% - 2rem);
  position: relative;
  background-color: #111;
  margin: 1rem;
  overflow: hidden;
  height: 50vh;
  min-height: 300px;

  .info {
    position: absolute;
    color: #fff;
    background-color: ${ props => props.bgClr };
    left: 0;
    bottom: ${ props => props.opened ? '0' : 'calc(-100% + 70px)'};
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: .5s ease;
  }
  h3 {
    font-size: 1.4rem;
    font-family: Ubuntu, sans-serif;
    margin: 1.4rem 2rem;
    transition: all 1s ease-in-out;
  }
  p{
    color: #ddd;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: Nunito, sans-serif;
    margin: 2rem;
  }
  svg {
    position: absolute;
    top: 0;
    right: 1.3rem;
    font-size: 1.8rem;
    margin-top: 1.3rem;
    transition: all 1s ease;
    transform: ${ props => !props.opened && 'rotate(45deg)' };
  }
  a{
    position: absolute;
    left: 2rem;
    bottom: 1.5rem;
    color: #333;
    padding: .9rem;
    box-shadow: 0 0 .2rem #fff;
    border-radius: 2.5rem;
    background-color: #11ffff;
    font-family: Ubuntu, sans-serif;
    font-weight: 300;
    font-size: 1.2rem;
  }
  ::before{
    content: "";
    width: 100%; height: 100%;
    bottom: 0; left: 0;
    position: absolute;
    background-image: url(${props => props.imgUrl});
    background-size: cover;
  }
  @media only screen and (max-width: 900px){
    width: calc(100% - 2rem);
  }
`

export default Container