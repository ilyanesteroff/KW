import styled from 'styled-components'

const SearchTop = styled.input`

  border-radius: 5px;
  padding: 5px;
  width: 100%;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 0.9rem;
  font-family: 'Roboto Condensed', sans-serif;
  letter-spacing: 0.5px;

    &:focus {
        outline: 0 none;
        border: none;
    }
`

export default SearchTop