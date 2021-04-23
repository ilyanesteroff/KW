import styled from 'styled-components'


const Container = styled.div`
  margin: 2rem 0;
  border-bottom: solid 1px #333;
  padding: .5rem 0;
  display: flex;
  justify-content: space-between;

  a{
    font-size: 1.2rem;
    display: block;
    width: 100%;
    font-family: Abel, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
    color: #113355;
  }
  #right {
    text-align: right;
  }
`

export default Container