import styled from 'styled-components'


const Container = styled.div`
  padding: .5rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
  backdrop-filter: blur(4px);
  font-family:  Ubuntu, sans-serif;
  
  #flex{
    margin-bottom: .3rem;
  }
  h3{
    font-size: 1.7rem;
    color: #ddd;
    font-weight: 300;
    margin-left: 2%;
    white-space: nowrap;
  }
  svg{
    color: #14b0ee;
    font-size: 2rem;
    margin-left: .5rem;
  }
  a{
    margin: 1rem .5rem;
    color: #fff;
  }
`

export default Container