import React from 'react'


const Page = ({ content }) => (
  <div id="history-page" className="framed-container">
    <h2>{ content.title }</h2>
    {
      content.paragraphs && content.paragraphs.map((para) => <p>{ para }</p>)
    }
    {content.listItems && content.listItems.length > 0 &&
      <ul id="list">
        {
          content.listItems.map((item) => <li>{ item }</li>)
        }
      </ul>
    }
  </div>
)

export default Page