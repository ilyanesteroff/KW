import React, {useRef} from 'react'
import { location } from './info'
import { Chapter } from '../Helpers/DesignAssistants' 
import { Width } from '../pages/contexts'
import { ModalTemplate } from '../Helpers/Modal'
import { useManageSectionSwitching, useOpenCloseModal } from '../Helpers/Hooks'
import LowerNavigation from './NavArrows'

export default () => {
  const [changeActiveElement, refs, current, nextPrev] = useManageSectionSwitching()

  return (
    <div className="MainSectionContainer TableSection">
      <Chapter additionalStyle={{textAlign: 'left', marginLeft: '2%'}}>Location of Key West</Chapter>
      <div className="tab">
        {location.items.map((item, index) => {
          const newRef = useRef(null);
          refs.push(newRef);
          return <button 
            className="tabLinks"
            ref={newRef} id={index} onClick={changeActiveElement} 
            style={{display: Width() > 760 ? 'inline' : 'block'}} key={index}>
             {item}
          </button>
        })}
      </div>
      <div className="locationContent">
        <Content index={current}/>
        <LowerNavigation current={current} content={location.items} handleClick={nextPrev}/>
      </div>
    </div>
  )
}

const Content = ({index}) => {
    const [ closeOpenModal, isModalOpened ] = useOpenCloseModal()

    return (
      <>
        <img className="MapImage" alt={location.items[index]} src={location.content[index]} onClick={closeOpenModal}/>
        {isModalOpened && <ModalTemplate src={location.content[index]} opened={closeOpenModal}/>}
      </>
    )
}