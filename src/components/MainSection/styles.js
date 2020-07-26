import { width } from '../Helpers/Helpers'

const generateContainerStyle = (left = 0.125, mediaLeft = 0.05) => {
    let _left, _width
  if(width() > 800){
      _left = (width() * left) * 100 / width()
      _width = (width() * (1 - (left * 2))) * 100 / width()
  } else {
      _left = (width() * mediaLeft) * 100 / width()
      _width = (width() * (1 - (mediaLeft * 2))) * 100 / width()
  }
  let output = {
      position: 'relative',
      width: _width + '%',
      left: _left + '%',
  }
  return output
}

const Sectionstyle = {
    position: 'relative',
    height: 'auto',
    marginTop: '10vh',
    marginBottom: '6rem'
}

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

export { generateContainerStyle, Sectionstyle, SSS }