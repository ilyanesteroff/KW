import { width } from '../Helpers/Helpers'

let SSS = () => {
    let output = {
    position: 'relative',
    marginLeft: width() > 1000 ? '10%' : '2.5%',
    width: width() > 1000 ? '80%' : '95%',
    marginTop: '7.5vh',
    textAlign: 'center'
  }
  return output
}

export { SSS }