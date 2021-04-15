import styled from 'styled-components'


const Container = styled.div`
  background-color: #eeeeff;
  padding: 2rem;
  overflow: hidden;

  h2{
    text-align: center;
    margin: 1rem;
    color: #222255;
    font-family: Ubuntu, sans-serif;
  }
  .places{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1rem 2rem;
  }
  @media only screen and (max-width: 900px){
    padding: 1rem;
    .places{
      margin: 0;
    }
  }
`

export default Container