import { Width } from '../pages/contexts'

const generateContainerStyle = (left = 0.125, mediaLeft = 0.05) => {
    let _left, _width
  if(Width() > 800){
      _left = (Width() * left) * 100 / Width()
      _width = (Width() * (1 - (left * 2))) * 100 / Width()
  } else {
      _left = (Width() * mediaLeft) * 100 / Width()
      _width = (Width() * (1 - (mediaLeft * 2))) * 100 / Width()
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
    marginLeft: Width() > 1000 ? '10%' : '2.5%',
    width: Width() > 1000 ? '80%' : '95%',
    marginTop: '7.5vh',
    textAlign: 'center'
  }
  return output
}

export { generateContainerStyle, Sectionstyle, SSS }