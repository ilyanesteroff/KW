import React, {useRef} from 'react'
import { Chapter } from '../Helpers/DesignAssistants' 
import { Width } from '../pages/contexts'
import { ModalTemplate } from '../Helpers/Modal'
import { useManageSectionSwitching, useOpenCloseModal } from '../Helpers/Hooks'
import LowerNavigation from './NavArrows'

export default ({data}) => {
  const [changeActiveElement, refs, current, nextPrev] = useManageSectionSwitching()
  const {items, content} = data

  return (
    <div className="MainSectionContainer TableSection">
      <Chapter additionalStyle={{textAlign: 'left', marginLeft: '2%'}}>Location of Key West</Chapter>
      <div className="tab">
        {items.map((item, index) => {
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
        <Content item={items[current]} content={content[current]}/>
        <LowerNavigation current={current} content={items} handleClick={nextPrev}/>
      </div>
    </div>
  )
}

const Content = ({item, content}) => {
    const [ closeOpenModal, isModalOpened ] = useOpenCloseModal()

    return (
      <>
        <img className="MapImage" alt={item} src={content} onClick={closeOpenModal}/>
        {isModalOpened && <ModalTemplate src={content} opened={closeOpenModal}/>}
      </>
    )
}