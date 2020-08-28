import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { HeightContext } from '../pages/contexts'
import { ModalTemplate } from '../Helpers/Modal'
import { useOpenCloseModal } from '../Helpers/Hooks'

export default React.memo((props) => {
  let Height = () => React.useContext(HeightContext)

  const [ closeOpenModal, isModalOpened ] = useOpenCloseModal()

  let placeInfoStyle = {
    backgroundColor: props.color
  }
  
  let height 
  Height() < 500 ? height = '70vh' : height = '50vh' 

  const toggleInfo = event => {
    if(window.innerWidth < 1000) {
      let parent
      event.target.parentElement.classList.contains('PlaceInfo') ? parent = event.target.parentElement : 
        parent = event.target.parentElement.parentElement
      let closeIcon = parent.lastElementChild
      if(!parent.classList.contains('TogglePlaceInfo')) {
        parent.getElementsByClassName('NameOfThePlace')[0].style.margin = window.innerHeight > 400 ? '12vh 0 0 6%' : '10vh 0 0 6%'
        closeIcon.style.transform = 'rotate(180deg)'
      } else {
        parent.getElementsByClassName('NameOfThePlace')[0].style.margin = '3.4vh 6%'
        closeIcon.style.transform = 'rotate(45deg)'
      }
      parent.classList.toggle('TogglePlaceInfo')
    }
  } 

  return (
    <>
      <div className="PlaceContainer" style={{height: height}} onDoubleClick={() => closeOpenModal(true)}>
        <img src={props.url} className="PlaceImage" style={{height: height}}/>
        <div className="PlaceInfo" style={placeInfoStyle}>
          <h2 className="NameOfThePlace">{props.factType}</h2>
          <p className="PlaceInfoText">{props.content}</p>
          <Link to={`/places/${props.place}`} className="MoreInfoLink">More details</Link>
          <FontAwesomeIcon icon={faTimesCircle} className="OpenCloseBar" onClick={toggleInfo}/>
        </div>
      </div>
      {isModalOpened && <ModalTemplate src={props.url} opened={closeOpenModal}/>}
    </>
  )
})

