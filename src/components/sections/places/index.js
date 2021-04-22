import React from 'react'
import Links from './Links'


const Place = ({ data }) => {
  console.log(data)

  return (
    <>
      <div className="page-container">
        <div className="introduction">
          <h2>{ data.topic }</h2>
          <p>{ data.additionalInfo }</p>
          <a 
            href={ data.href } 
            target="_blank"
            rel="noopener noreferrer"
          >More info and facts in wikipedia</a>
        </div>
        <Links/>
      </div>
      
      {/* <UpperContainer>
        <Chapter>
          {info.topic}
        </Chapter>
        <TextArea>
          {info.additionalInfo}
        </TextArea>
        <Link href={info.href}>
          More info and facts in wikipedia
        </Link> 
      </UpperContainer> */}
      {/* {Width() > 500  && info.images !== undefined && 
        <>
          <div style={{ backgroundColor: '#333', height: `${height }vh`, marginTop: '10vh'}}>
            <ErrorBoundary callback={() => window.location.reload()}>
              <Slider images={info.images} info={descriptions} color={info.color} sliderStyle={sliderStyle} url={info.images}/>
            </ErrorBoundary>
          </div>
        </>
      }
      <NavArrows 
        current={current} 
        content={places.map(element => element.topic)} 
        handleClick={nextPrev} 
        hrefs={places.map(element => `/places/${element.place}`)}
      /> */}
    </>
  )
}

export default Place