import styled from 'styled-components'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed; 
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  overflow: hidden;

  img{
    max-width: 90%;
    max-height: 80%;
  }
  #close-btn{
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    color: #1ff;
  }
`

export default Container